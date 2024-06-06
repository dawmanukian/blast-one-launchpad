import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header className={classes.header}>
      <div className={classes.links}>
        <Link className={classes.link} to={"/"} style={location.pathname === "/" ? {color: '#FFE000'} : null}>
          Home
        </Link>
        <Link className={classes.link} to={"/launchpad"} style={location.pathname === "/launchpad" ? {color: '#FFE000'} : null}>
          Launchpad
        </Link>
        <Link className={classes.link} to={"/whitepaper"} style={location.pathname === "/whitepaper" ? {color: '#FFE000'} : null}>
          Whitepaper
        </Link>
        <Link
          className={classes.link}
          to={"/"}
          style={{
            color: "#404040",
          }}
        >
          Explore
        </Link>
      </div>
      <div className={classes.logo}>
        <svg
          width="36"
          height="32"
          viewBox="0 0 36 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2134_395)">
            <path
              d="M36 16V23.9991L27.8927 32H19.7835V23.9991H27.8927V16H24.1073V7.9991H16V0H24.1073L32.2165 7.9991V16H36Z"
              fill="#FFE000"
            />
            <path
              d="M7.85144 0.360482L15.6398 8.1487V23.8495L7.85144 31.6395H0.360158V24.3596H8.36106V7.63862H0.360158V0.360482H7.85144ZM8.0009 0H0V7.9991H8.0009V23.9991H0V32H8.0009L16 23.9991V7.9991L8.0009 0Z"
              fill="#FFE000"
            />
          </g>
          <defs>
            <clipPath id="clip0_2134_395">
              <rect width="36" height="32" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={classes.connect_wallet}>
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
    </header>
  );
};

export default Header;
