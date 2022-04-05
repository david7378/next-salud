import React from "react";
import Image from "next/image";

const InfoArticle = ({
  title,
  author,
  modifiedDate,
  metas,
  dataArticle,
  featured_media,
}) => {
  return (
    <>
      <h1 className="text-4xl text-teal-600 font-bold ">{title}</h1>

      <div className="grid grid-cols-2  mt-6 mb-4 ">
        <div className=" inline-flex  text-xs font-bold text-teal-800 ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </span>

          <span className="ml-1"> Escrito por: {author?.name}</span>
        </div>

        <div className="text-xs font-bold text-teal-800 inline-flex">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </span>

          <span className="ml-1 ">Última modificación: {modifiedDate} </span>
        </div>
      </div>

      <div className="mt-4">
        <div className="text-base border-l-4 border-blue-500 content-end mt-2 mb-4 pt-1 pb-1 pl-5 font-sans">
          {metas && metas.description}
        </div>

        <figure className="drop-shadow-lg">
          {dataArticle && dataArticle.id > 1 && (
            <Image
              src={featured_media.large}
              width={800}
              height={500}
              alt={title}
            />
          )}
        </figure>
      </div>
    </>
  );
};

export default InfoArticle;
