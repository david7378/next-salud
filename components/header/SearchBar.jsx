import React from "react";

const SearchBar = ({searchTerm, setSearchTerm, handlekey, fetchData }) => {
  return (
    <>
      {/* BUSCADOR */}
      <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            type="text"
            value={searchTerm}
            className=" block w-full pr-72 p-2 sm:text-sm placeholder:pr-80 rounded-md placeholder:text-sm font-semibold placeholder:font-thin"
            placeholder="Busca artículos de salud, recetas, tips y más..."
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => handlekey(e)}
          />
          <div className="absolute inset-y-1 right-0 flex border-l-2 items-center">
            <button
              className="text-blue-500 font-bold py-1 px-3 mr-1 focus:outline-none border-hidden hover:bg-slate-50"
              type="button"
              onClick={() => fetchData(searchTerm)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
