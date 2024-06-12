import React from "react";
import classes from "./slider.module.css";

const Slider = () => {
  return (
    <div className={classes.slider}>
      <div className={classes.slide_item}>
        <div className={classes.slide_text}>
          <p>Wait & wait</p>
          <span>
          This software helps to recover lost phrases, each wallet contains 12 words which are its backup code. Using a prede
          </span>
        </div>
      </div>
      <div className={classes.arrows}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="40"
            height="40"
            rx="20"
            fill="#0B0B0B"
            fill-opacity="0.15"
          />
          <mask
            id="mask0_2150_978"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="15"
            y="13"
            width="8"
            height="14"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22.7071 13.2929C23.0976 13.6834 23.0976 14.3166 22.7071 14.7071L17.4142 20L22.7071 25.2929C23.0976 25.6834 23.0976 26.3166 22.7071 26.7071C22.3166 27.0976 21.6834 27.0976 21.2929 26.7071L15.2929 20.7071C14.9024 20.3166 14.9024 19.6834 15.2929 19.2929L21.2929 13.2929C21.6834 12.9024 22.3166 12.9024 22.7071 13.2929Z"
              fill="black"
            />
          </mask>
          <g mask="url(#mask0_2150_978)">
            <rect x="8" y="8" width="24" height="24" fill="white" />
          </g>
        </svg>

        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="40"
            height="40"
            rx="20"
            fill="#0B0B0B"
            fill-opacity="0.15"
          />
          <mask
            id="mask0_2150_997"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="17"
            y="13"
            width="8"
            height="14"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.2929 13.2929C17.6834 12.9024 18.3166 12.9024 18.7071 13.2929L24.7071 19.2929C25.0976 19.6834 25.0976 20.3166 24.7071 20.7071L18.7071 26.7071C18.3166 27.0976 17.6834 27.0976 17.2929 26.7071C16.9024 26.3166 16.9024 25.6834 17.2929 25.2929L22.5858 20L17.2929 14.7071C16.9024 14.3166 16.9024 13.6834 17.2929 13.2929Z"
              fill="black"
            />
          </mask>
          <g mask="url(#mask0_2150_997)">
            <rect x="8" y="8" width="24" height="24" fill="white" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Slider;
