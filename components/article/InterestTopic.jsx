import React from "react";

const InterestTopic = ({related_links, number}) => {
  return (
    <>
      <div className="mt-4 p-4 bg-slate-100 hover:bg-slate-200 transition-colors rounded-xl w-full ">
        <div className=" inline-flex items-center">
          <span>
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
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </span>

          <div className="text-xl font-bold ml-1 align-middle text-teal-600">
            Te puede interesar:
            <a
              href={related_links ? related_links[number].link : 1}
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              {related_links ?related_links[number].title : null}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterestTopic;
