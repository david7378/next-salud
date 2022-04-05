import { useAppContext } from "../context/SaludProvider";
import ArticleItem from "../components/article/ArticleItem.jsx";
import ReactPaginate from "react-paginate";
import Loading from "../components/alerts/Loading";
import Dropdown from "../components/article/Dropdown";
import FailSearch from "../components/alerts/FailSearch";
import EmptyList from "../components/alerts/EmptyList";
import Layout from "../components/layout/Layout";

export default function Home() {
  const {
    dataArticles,
    id,
    setId,
    handlePageClick,
    noDataMsg,
    invalidWord,
    loading,
  } = useAppContext();
  console.log(dataArticles);
  const title = "Articulos de salud"

  const description = "Vivir bien, tips de bienestar general, recetas saludables, ejercicios, fit"

  return (
    <Layout title={title} description={description}>
      {loading ? (
        <Loading />
      ) : (
        <div className="container mx-auto  md:w-3/4 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  mt-4 ">
            <div className="grid grid-rows-2 grid-flow-col gap-3">
              <div>
                <h2 className="col-start-1 col-end-4 text-3xl font-extrabold text-gray-500 ">
                  LISTADO DE ARTICULOS
                </h2>
              </div>
              {dataArticles && dataArticles.data.length > 0 && <Dropdown />}
            </div>

            <div className="max-w-2xl mx-auto lg:max-w-none">
              {/* MENSAJE NO ENCONTRO LA BUSQUEDA */}
              <FailSearch noDataMsg={noDataMsg} invalidWord={invalidWord} />
              {/* MENSAJE LISTA ESTA VACIA*/}
              <EmptyList dataArticles={dataArticles} noDataMsg={noDataMsg} />

              {/* LISTADO DE ARTICULOS */}
              <div className="mt-4 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-4">
                {dataArticles && dataArticles?.data.length > 0
                  ? dataArticles.data.map((article) => (
                      <ArticleItem
                        key={article.id}
                        article={article}
                        setId={setId}
                        id={id}
                      />
                    ))
                  : ""}
              </div>

              {/* PAGINACION DE LOS ARTICULOS*/}
              <ul className="flex justify-center mt-10">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={2}
                  marginPagesDisplayed={1}
                  pageCount={dataArticles.pages}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                  pageClassName="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  pageLinkClassName=""
                  previousClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  previousLinkClassName=""
                  nextClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  nextLinkClassName=""
                  breakClassName="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium"
                  containerClassName="flex  justify-center relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                  activeClassName=" z-10 bg-blue-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                />
              </ul>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
