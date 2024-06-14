import React from "react";
import classes from "./mint-zone.module.css";
import key from "../../img/key.gif";

const MintZone = () => {
  return (
    <div className={classes.key}>
      <div className={classes.bg}></div>
      <div className={classes.data}>
        <img src={key} alt="" height={"372px"} width={"342px"} />
        <div className={classes.texts}>
          <span className={classes.header}>BlastOne: Key</span>
          <p className={classes.info}>
            Early Beta Testing Access: Early backers will be given exclusive
            access to the beta testing phase of the platform, allowing them to
            explore features, provide feedback, and influence the development of
            the platform before the public launch.
          </p>
          <div>
            <div className={classes.line}></div>
            <span className={classes.score}>0 of 1000</span>
          </div>
          <button className={classes.mint} disabled>Mint for free</button>
        </div>
      </div>
    </div>
  );
};

export default MintZone;
