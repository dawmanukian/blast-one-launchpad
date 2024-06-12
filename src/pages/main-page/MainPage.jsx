import React from "react";
import classes from "./main-page.module.css";
import MintZone from "../../components/mint-zone/MintZone";
import cube from "../../img/cube-pattern (1).png"

const MainPage = () => {
  return (
    <div className={classes.page}>
      <MintZone />
      <img src={cube} alt="" />
    </div>
  );
};

export default MainPage;
