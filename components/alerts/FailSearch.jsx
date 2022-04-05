import React from "react";

const FailSearch = ({ noDataMsg, invalidWord }) => {
  return (
    <>
  
      {noDataMsg && (
        <div
          className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 shadow-lg"
          role="alert"
        >
          <p className="font-bold">Atención</p>
          <p>
            Lo siento, no encontramos ningún articulo relacionado a: {" "}
            <strong>{invalidWord}.</strong>
          </p>
        </div>
      )}
    </>
  );
};

export default FailSearch;
