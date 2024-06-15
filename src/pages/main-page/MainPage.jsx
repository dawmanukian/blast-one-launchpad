import React from "react";
import classes from "./main-page.module.css";
import MintZone from "../../components/mint-zone/MintZone";
import cube from "../../img/cube-pattern (1).png";

const MainPage = () => {
  return (
    <>
      <div className={classes.page}>
        <MintZone />
      </div>
      <div style={{ position: "absolute", bottom: "0px", width: "100%", display: "flex", justifyContent: "center" }}>
        <img src={cube} alt="" className={classes.cub} />
      </div>
    </>
  );
};

export default MainPage;
