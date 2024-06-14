import React from "react";
import classes from "./mobile-menu.module.css";
import { useLocation } from "react-router-dom";

const MobileMenu = () => {
  const location = useLocation();
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
        >
          Explore
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
