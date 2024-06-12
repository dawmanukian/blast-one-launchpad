import React from "react";
import classes from "./mint-zone.module.css";
import key from "../../img/key.gif";

const MintZone = () => {
  return (
    <div className={classes.key}>
      <div className={classes.data}>
        <img src={key} alt="" height={"372px"} width={"342px"} />
        <div className={classes.texts}>
          <span className={classes.header}>BlastOne: Key</span>
          <p className={classes.info}>
            This software helps to recover lost phrases, each wallet contains 12
            words which are its backup code. Using a predefined algorithm, the
            program searches for and selects these words
          </p>
          <div>
            <div className={classes.line}></div>
            <span className={classes.score}>0 of 1000</span>
          </div>
          <button className={classes.mint}>Mint for 0.03 ETH</button>
        </div>
      </div>
    </div>
  );
};

export default MintZone;
