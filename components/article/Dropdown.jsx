import React, { useState } from "react";
import { useAppContext } from "../../context/SaludProvider";

const Dropdown = ({ dataArticles }) => {
  const [toggleDrop, setToggleDrop] = useState(false);
  const toggleDropClass = "hidden";

  const {
    searchTerm,
    fetchData,
    relevance,
    setRelevance,
    fetchRelevantData,
    handlePageClick,
  } = useAppContext();

  const defaultOrder = () => {
    setRelevance(!relevance);
    fetchData(searchTerm);
    dropDown();
  };

  const relevanceOrder = () => {
    setRelevance(!relevance);
    fetchRelevantData(searchTerm);
    handlePageClick(0);
    dropDown();
  };
  const dropDown = () => {
    setToggleDrop(!toggleDrop);
  };
  return (
    <>
      <div className="dropdown relative w-fit">
        <button
          className="
          dropdown-toggle
          sm:px-6
          px-2          
          py-2
          mr-12
          bg-blue-500 
          text-white
          font-medium
          text-xs
          leading-tight
          sm:uppercase  
          uppercase        
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-500 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap         
        "
          type="button"
          id="dropdownMenuButton1tx"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={() => dropDown()}
        >
          Ordernar por:
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-down"
            className="w-2 ml-2"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
            ></path>
          </svg>
        </button>
        <ul
          className={`dropdown-menu
            min-w-max
            absolute          
            bg-white
            text-base
            z-50
            float-left
            py-2
            list-none
            text-left
            rounded-lg
            shadow-lg
            mt-1          
            m-0
            bg-clip-padding
            border-none
           ${toggleDrop ? null : toggleDropClass}`}
        >
          <li>
            <a
              className="
              dropdown-item
              text-sm
              sm:py-0
              py-0
              sm:px-2
              px-1
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
              cursor-pointer
            "
              onClick={() => defaultOrder()}
            >
              Última modificación
            </a>
          </li>
          <hr className="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />

          <li>
            <a
              className="
              dropdown-item
              text-sm
              sm:py-0
              py-0
              px-1
              sm:px-2
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
              cursor-pointer
            "
              onClick={() => relevanceOrder()}
            >
              Por relevancia
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
