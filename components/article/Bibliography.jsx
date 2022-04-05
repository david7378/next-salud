import React from "react";

const Bibliography = ({ bibliograph, setBibliograph, cleanBibliography }) => {
  return (
    <>
      <div className="mt-6 mb-6 h-auto">
        <div className="border-y-2">
          <button
            onClick={() => setBibliograph(!bibliograph)}
            className="flex align-middle text-teal-700 pt-4 pb-4 transition "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>

            <div className="align-middle text-gray-500 text-sm font-bold ml-1">
              Bibliografía
            </div>
          </button>
        </div>
        {bibliograph && (
          <div
            className="bibliography h-max"
            dangerouslySetInnerHTML={{ __html: cleanBibliography }}
          ></div>
        )}
      </div>
    </>
  );
};

export default Bibliography;
