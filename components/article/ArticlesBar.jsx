import Dropdown from "../article/Dropdown";

const ArticlesBar = ({ dataArticles }) => {
  return (
    <div className="sm:grid grid-rows-3 grid-flow-col sm:grid-rows-2 sm:gap-3">
      <div className="sm:inline-flex block">
        <h2 className=" text-2xl sm:text-3xl font-bold sm:font-extrabold mr-4 text-gray-500 ">
          LISTADO DE ARTICULOS
        </h2>
        {dataArticles && dataArticles.data.length > 0 && (
          <div className="text-slate-400 uppercase sm:text-3xl text-xl font-normal sm:mb-0 mb-1 sm:font-bold">
            <span className="text-blue-400">
              {`${dataArticles && dataArticles.size} `}{" "}
            </span>
            resultados
          </div>
        )}
      </div>

      {/* SE ACTIVA DROPDOWN CUANDO HAY ARTICULOS */}
      {dataArticles && dataArticles.data.length > 0 && (
        <Dropdown dataArticles={dataArticles} />
      )}
    </div>
  );
};

export default ArticlesBar;
