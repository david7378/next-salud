import Image from "next/image";
import { useRouter } from "next/router";
import { useAppContext } from "../../context/SaludProvider";

const ArticleItem = ({ article }) => {
  const { getArticle, setDataArticle } = useAppContext();
  const router = useRouter();

  // MUESTRA EL ARTICULO ELEGIDO
  const showArticle = async (id) => {
    try {
      const article = await getArticle(id);
      if (article !== null) {
        setDataArticle(article);
        router.push("/articulos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        key={article.id}
        onClick={() => showArticle(article.id)}
        className="p-2 sm:p-4 cursor-pointer pb-2 sm:pb-5 transition ease-in-out delay-350 hover:-translate-y-1 hover:scale-105 duration-200 shadow-lg border-2 rounded-sm hover:bg-blue-50"
      >
        <Image
          src={article.featured_media.large}
          alt={article.slug}
          width={500}
          height={415}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full mb-1 shadow-xg rounded-lg "
        />

        <h2 className="mt-2  line-clamp-2  font-bold text-xl text-gray-500">
          <a href="#">{article.title}</a>
        </h2>
        <p className="text-base mt-1 line-clamp-5 text-gray-600  ">
          {article.headline}
        </p>
      </div>
    </>
  );
};

export default ArticleItem;
