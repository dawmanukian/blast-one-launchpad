import React from "react";
import classes from "./card-mint.module.css";

const CardMint = ({ header, img, supply, startsIn, status }) => {
  return (
    <div className={classes.card}>
      <div className={classes.bg}></div>
      <div className={classes.data}>
        <img
          src={img}
          alt="card image"
          className={classes.img}
        />
        <p className={classes.header}>{header}</p>
        <div className={classes.info}>
          <div className={classes.text}>
            <p>Starts in</p>
            <span>{startsIn}</span>
          </div>
          <div className={classes.text}>
            <p>Supply</p>
            <span>{supply}</span>
          </div>
        </div>
        <button className={classes.mint} disabled={status !== "Mint"}>{status}</button>
      </div>
    </div>
  );
};

export default CardMint;
