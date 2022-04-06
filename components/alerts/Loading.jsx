/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div>
      <div
        css={css`
          background-color: rgb(59 130 246);
          background-image: linear-gradient(0deg, #1e40af 0%, 100%);
          border-top: 1px solid lightgrey;
          height: 92.37vh;
          z-index: 9999;
          opacity: 1;
          position: relative;
          z-index: 9;
          overflow-y: auto;
        `}
      >
        <div
          css={css`
            position: absolute; /* or absolute */

            top: 38%;
            left: 46.9%;
            @media (max-width: 600px) {
              top: 30%;
              left: 36.5%;
            }
          `}
        >
          <Triangle
            heigth="100"
            width="100"
            color="white"
            ariaLabel="loading-indicator"
          />
          <h3
            css={css`
              margin-left: 13px;
              line-height: 4mm;
              font-weight: 600;
              color: #ffdb7a;
            `}
          >
            LOADING...
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Loading;
