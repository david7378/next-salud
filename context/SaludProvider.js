import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataArticles, setDataArticles] = useState({
    data: [],
    pages: 0,
    orderBy: "relevance",
  });
  const [dataArticle, setDataArticle] = useState([]);
  const [id, setId] = useState(0);
  const [relevance, setRelevance] = useState(false);
  const [bibliograph, setBibliograph] = useState(false);
  const [toastMessage, setToastMessage] = useState(false);

  const router = useRouter();

  // LOADING TOGGLE
  const [loading, setLoading] = useState(false);

  // NO DATA MESSAGE
  const [noDataMsg, setNoDataMsg] = useState(false);
  const [invalidWord, setInvalidWord] = useState("");
  const notify = () =>
    toast.warn("El dato ingresado no es valido...", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  // TRAE ARTICULOS RELEVANTES
  const fetchRelevantData = async (searchTerm) => {
    if (searchTerm.match(/^[\.a-zA-Z0-9_áéíóúñÑ,!? ]*$/) && searchTerm !== "") {
      setLoading(true);
      const res = await fetch(
        `https://beta.mejorconsalud.com/wp-json/mc/v3/posts?search=${searchTerm}&per_page=3&orderby=relevance`
      );
      const relevanceData = await res.json();
      setDataArticles(relevanceData);
      setLoading(false);
    } else {
      notify();
      setToastMessage(true);
    }
  };

  // TRAE LOS ULTIMOS ARTICULOS MODIFICADOS
  const fetchData = async (searchTerm) => {
    if (searchTerm.match(/^[\.a-zA-Z0-9_áéíóúñÑ,!? ]*$/) && searchTerm !== "") {
      setLoading(true);
      const response = await fetch(
        `https://beta.mejorconsalud.com/wp-json/mc/v3/posts?search=${searchTerm}&per_page=3&orderby=modified`
      );
      const data = await response.json();
      console.log(data);
      setDataArticles(data);
      setLoading(false);

      if (data.data.length === 0) {
        setNoDataMsg(true);
        setInvalidWord(searchTerm);
      } else setNoDataMsg(false);

      router.push("/");
    } else {
      notify();
      setToastMessage(true);
    }
  };

  // FUNCION PARA LA ORDEN BUSCAR CON LA TECLA ENTER
  const handlekey = (e) => {
    if (e.key === "Enter") {
      fetchData(searchTerm);
    }
  };

  // RETORNA UN NUMERO DE PAGINA
  const getPosts = async (currentPage) => {
    const response = await fetch(
      `https://beta.mejorconsalud.com/wp-json/mc/v3/posts?search=${searchTerm}&per_page=3&page=${currentPage}`
    );
    const data = await response.json();
    return data;
  };

  // RETORNO INFO DE ARTICULO POR ID
  const getArticle = async (id) => {
    const response = await fetch(
      `https://beta.mejorconsalud.com/wp-json/mc/v3/posts/${id}`
    );
    const completeArticle = await response.json();
    return completeArticle;
  };

  // MANEJA EL CLICK DE CADA PAGINA
  const handlePageClick = async (data) => {
    let currentPage = data.selected + 1;
    const postFromServer = await getPosts(currentPage);
    setLoading(false);
    setDataArticles(postFromServer);
  };

  return (
    <Context.Provider
      value={{
        searchTerm,
        setSearchTerm,
        dataArticles,
        id,
        setId,
        handlekey,
        handlePageClick,
        fetchData,
        getArticle,
        dataArticle,
        setDataArticle,
        setDataArticles,
        bibliograph,
        setBibliograph,
        setLoading,
        loading,
        noDataMsg,
        invalidWord,
        setRelevance,
        relevance,
        fetchRelevantData,
        toastMessage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export function useAppContext() {
  return useContext(Context);
}
