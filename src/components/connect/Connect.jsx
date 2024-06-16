import React, { useState } from "react";
import classes from "./connect.module.css";

const Connect = () => {
  const [connected, setConnected] = useState(true);
  const [wallet, setWallet] = useState("TL1234aiqsJacvpji9QWMBazeEbTCKHpTN");

  function shortenText(text, startChars = 4, endChars = 3) {
    if (text.length <= startChars + endChars + 3) {
      return text;
    }
    return text.slice(0, startChars) + "..." + text.slice(-endChars);
  }

  return (
    <>
      {connected ? (
        <button className={classes.connected}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_2465_1559"
              style={{maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="1"
              y="1"
              width="14"
              height="14"
            >
              <path
                d="M11.0002 8.33333C10.4479 8.33333 10.0002 8.78105 10.0002 9.33333C10.0002 9.88562 10.4479 10.3333 11.0002 10.3333C11.5524 10.3333 12.0002 9.88562 12.0002 9.33333C12.0002 8.78105 11.5524 8.33333 11.0002 8.33333Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.66683 3.33333C2.66683 2.96514 2.96531 2.66667 3.3335 2.66667H11.3335C11.7017 2.66667 12.0002 2.36819 12.0002 2C12.0002 1.63181 11.7017 1.33333 11.3335 1.33333H3.3335C2.22893 1.33333 1.3335 2.22876 1.3335 3.33333V12.6667C1.3335 13.7712 2.22893 14.6667 3.3335 14.6667H12.6668C13.7714 14.6667 14.6668 13.7712 14.6668 12.6667V6C14.6668 4.89543 13.7714 4 12.6668 4L3.3335 4C2.96531 4 2.66683 3.70152 2.66683 3.33333ZM2.66683 12.6667V5.21953C2.87535 5.29323 3.09974 5.33333 3.3335 5.33333L12.6668 5.33333C13.035 5.33333 13.3335 5.63181 13.3335 6V12.6667C13.3335 13.0349 13.035 13.3333 12.6668 13.3333H3.3335C2.96531 13.3333 2.66683 13.0349 2.66683 12.6667Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_2465_1559)">
              <rect width="16" height="16" fill="white" fill-opacity="0.4" />
            </g>
          </svg>

          {shortenText(wallet)}
        </button>
      ) : (
        <button className={classes.connect}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_4159_504"
              maskUnits="userSpaceOnUse"
              x="2"
              y="2"
              width="20"
              height="20"
            >
              <path
                d="M16.5 12.5C15.6716 12.5 15 13.1716 15 14C15 14.8284 15.6716 15.5 16.5 15.5C17.3284 15.5 18 14.8284 18 14C18 13.1716 17.3284 12.5 16.5 12.5Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4 5C4 4.44772 4.44772 4 5 4H17C17.5523 4 18 3.55228 18 3C18 2.44772 17.5523 2 17 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V9C22 7.34315 20.6569 6 19 6L5 6C4.44772 6 4 5.55228 4 5ZM4 19V7.82929C4.31278 7.93985 4.64936 8 5 8L19 8C19.5523 8 20 8.44772 20 9V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_4159_504)">
              <rect width="24" height="24" fill="#0B0B0B" />
            </g>
          </svg>
          Connect wallet
        </button>
      )}
    </>
  );
};

export default Connect;
