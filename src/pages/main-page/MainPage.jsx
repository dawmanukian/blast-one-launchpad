import React from "react";
import classes from "./main-page.module.css";
import MintZone from "../../components/mint-zone/MintZone";

const MainPage = () => {
  return (
    <div className={classes.page}>
      <MintZone />
    </div>
  );
};

export default MainPage;
