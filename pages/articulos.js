
import { useRouter } from "next/router";
import DOMPurify from "isomorphic-dompurify";
import { useAppContext } from "../context/SaludProvider";
import Breadcrumb from "../components/article/Breadcrumb";
import InterestTopic from "../components/article/InterestTopic";
import Bibliography from "../components/article/Bibliography";
import InfoArticle from "../components/article/InfoArticle";
import Layout from "../components/layout/Layout";

const Articulos = () => {
  const {
    dataArticle,
    bibliograph,
    setBibliograph,
    setDataArticles,
    setSearchTerm,
  } = useAppContext();

  const {
    author,
    content,
    modified,
    title,
    featured_media,
    bibliography,
    metas,
    related_links,
    excerpt,
  } = dataArticle;

  const router = useRouter();
  // PURIFICADOR HTML
  const cleanContent = DOMPurify.sanitize(content);
  const cleanBibliography = DOMPurify.sanitize(bibliography);
  

  // FORMATEA FECHA DE ULTIMA MODIFICACION (ARTICULO)
  const formatDate = new Date(modified ? modified : "2019-02-01T23:30:49+01:00");
  formatDate
  const options = { day: "numeric", month: "long", year: "numeric" };
  const modifiedDate = new Intl.DateTimeFormat("es-AR", options).format(
    formatDate
  );

  let titleSeo = title;
  let descriptionSeo = excerpt;
  return (
    <Layout title={titleSeo} description={descriptionSeo}>
      <div className="container mx-auto mt-6 mb-6 md:w-1/2">
        {/* Breadcrumb */}
        <Breadcrumb
          router={router}
          setDataArticles={setDataArticles}
          setSearchTerm={setSearchTerm}
        />

        <article>
          {/* INFORMACION DEL ARTICULO */}
          <InfoArticle
            title={title}
            author={author}
            modifiedDate={modifiedDate}
            metas={metas}
            dataArticle={dataArticle}
            featured_media={featured_media}
          />

          {/* TEMA DE INTERES */}
          <InterestTopic related_links={related_links} number={0} />

          {/* CLEAN CONTENT */}
          <div
            className="inner"
            dangerouslySetInnerHTML={{ __html: cleanContent }}
          ></div>

          {/* TEMA DE INTERES */}
          <InterestTopic related_links={related_links} number={1} />

          {/* BIBLIOGRAFIA */}
          <Bibliography
            bibliograph={bibliograph}
            setBibliograph={setBibliograph}
            cleanBibliography={cleanBibliography}
          />
        </article>
      </div>
    </Layout>
  );
};

export default Articulos;
