import React, { useState } from "react";
import classes from "./mobile-menu.module.css";
import { useLocation } from "react-router-dom";

const MobileMenu = () => {
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);
  return (
    <div className={classes.menu}>
      <ul>
        <a href="/">
          <li style={location.pathname === "/" ? { color: "#FFE000" } : null}>
            Home
          </li>
        </a>
        <a href="/launchpad">
          <li
            style={
              location.pathname === "/launchpad" ? { color: "#FFE000" } : null
            }
          >
            Launchpad
          </li>
        </a>
        <a href="https://docs.blastone.io/" target="_blank">
          <li>Whitepaper</li>
        </a>
        <li
          style={{
            color: "#404040",
          }}
          onClick={() => {
            if (!showAlert) {
              setShowAlert(true);
              setTimeout(() => setShowAlert(false), "2000");
            }
          }}
        >
          Explore
        </li>
        {showAlert && (
          <div>
            <div className={classes.coming}>
              <span>Coming soon...</span>
            </div>
          </div>
        )}
      </ul>
      <div style={{marginBottom: "75px"}}>
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
      </div>
    </div>
  );
};

export default MobileMenu;
