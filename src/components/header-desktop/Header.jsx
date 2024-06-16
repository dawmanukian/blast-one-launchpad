import React, { useState } from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Connect from "../connect/Connect";

const Header = ({ onOpenMenu, isMenuOpen }) => {
  const location = useLocation();
  const [showAlert, setShowAlert] = useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.links}>
        <Link
          className={classes.link}
          to={"/"}
          style={location.pathname === "/" ? { color: "#FFE000" } : null}
        >
          Home
        </Link>
        <Link
          className={classes.link}
          to={"/launchpad"}
          style={
            location.pathname === "/launchpad" ? { color: "#FFE000" } : null
          }
        >
          Launchpad
        </Link>
        <a
          className={classes.link}
          href={"https://docs.blastone.io/"}
          target="_blank"
        >
          Whitepaper
        </a>
        <Link
          className={classes.link}
          to={"/"}
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
        </Link>
        {showAlert && (
          <div>
            <div className={classes.coming}>
              <span>Coming soon...</span>
            </div>
          </div>
        )}
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
        <div className={classes.eth}>- ETH</div>
        <Connect />
        {isMenuOpen ? (
          <svg
            onClick={onOpenMenu}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_2418_1093"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="6"
              y="6"
              width="20"
              height="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.05752 7.05719C7.57822 6.53649 8.42244 6.53649 8.94313 7.05719L16.0003 14.1144L23.0575 7.05719C23.5782 6.53649 24.4224 6.53649 24.9431 7.05719C25.4638 7.57789 25.4638 8.42211 24.9431 8.94281L17.8859 16L24.9431 23.0572C25.4638 23.5779 25.4638 24.4221 24.9431 24.9428C24.4224 25.4635 23.5782 25.4635 23.0575 24.9428L16.0003 17.8856L8.94313 24.9428C8.42244 25.4635 7.57822 25.4635 7.05752 24.9428C6.53682 24.4221 6.53682 23.5779 7.05752 23.0572L14.1147 16L7.05752 8.94281C6.53682 8.42211 6.53682 7.57789 7.05752 7.05719Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_2418_1093)">
              <rect
                width="32"
                height="32"
                transform="matrix(-1 0 0 1 32 0)"
                fill="white"
                fill-opacity="0.4"
              />
            </g>
          </svg>
        ) : (
          <svg
            onClick={onOpenMenu}
            className={classes.menu}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_2389_803"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="2"
              y="6"
              width="28"
              height="20"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.66675 8C2.66675 7.26362 3.2637 6.66667 4.00008 6.66667H28.0001C28.7365 6.66667 29.3334 7.26362 29.3334 8C29.3334 8.73638 28.7365 9.33333 28.0001 9.33333H4.00008C3.2637 9.33333 2.66675 8.73638 2.66675 8ZM2.66675 16C2.66675 15.2636 3.2637 14.6667 4.00008 14.6667H28.0001C28.7365 14.6667 29.3334 15.2636 29.3334 16C29.3334 16.7364 28.7365 17.3333 28.0001 17.3333H4.00008C3.2637 17.3333 2.66675 16.7364 2.66675 16ZM2.66675 24C2.66675 23.2636 3.2637 22.6667 4.00008 22.6667H28.0001C28.7365 22.6667 29.3334 23.2636 29.3334 24C29.3334 24.7364 28.7365 25.3333 28.0001 25.3333H4.00008C3.2637 25.3333 2.66675 24.7364 2.66675 24Z"
                fill="black"
              />
            </mask>
            <g mask="url(#mask0_2389_803)">
              <rect
                width="32"
                height="32"
                transform="matrix(-1 0 0 1 32 0)"
                fill="white"
                fill-opacity="0.4"
              />
            </g>
          </svg>
        )}
      </div>
    </header>
  );
};

export default Header;
