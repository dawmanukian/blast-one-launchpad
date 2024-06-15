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
      </ul>
      {showAlert && (
        <div>
          <div className={classes.coming}>
            <span>Coming soon...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
