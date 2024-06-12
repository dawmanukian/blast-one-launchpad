import React from "react";
import classes from "./launchpad.module.css";
import Slider from "../../components/slider/Slider";
import CardMint from "../../components/card-mint/CardMint";
import key from "../../img/key.gif";
import cube from "../../img/cube-pattern.png"

const LaunchPad = () => {
  return (
    <div>
      <Slider />
      <div className={classes.block}>
        <div className={classes.cube}>
          <img src={cube} alt="cube image"/>
        </div>
        <p className={classes.header}>Upcoming</p>
        <div className={classes.cards}>
          <CardMint img={key} header={"BlastOne: Key"} startsIn={"2d 01h 13m"} supply={"444"}/>
          <CardMint img={key} header={"BlastOne: Key"} startsIn={"2d 01h 13m"} supply={"444"}/>
          <CardMint img={key} header={"BlastOne: Key"} startsIn={"2d 01h 13m"} supply={"444"}/>
          <CardMint img={key} header={"BlastOne: Key"} startsIn={"2d 01h 13m"} supply={"444"}/>
          <CardMint img={key} header={"BlastOne: Key"} startsIn={"2d 01h 13m"} supply={"444"}/>
          <CardMint img={key} header={"BlastOne: Key"} startsIn={"2d 01h 13m"} supply={"444"}/>
          <CardMint img={key} header={"BlastOne: Key"} startsIn={"2d 01h 13m"} supply={"444"}/>
          <CardMint img={key} header={"BlastOne: Key"} startsIn={"2d 01h 13m"} supply={"444"}/>
          <CardMint img={key} header={"BlastOne: Key"} startsIn={"2d 01h 13m"} supply={"444"}/>
          <CardMint img={key} header={"BlastOne: Key"} startsIn={"2d 01h 13m"} supply={"444"}/>
          <CardMint img={key} header={"BlastOne: Key"} startsIn={"2d 01h 13m"} supply={"444"}/>
          <CardMint img={key} header={"BlastOne: Key"} startsIn={"2d 01h 13m"} supply={"444"}/>
        </div>
      </div>
      <div className={classes.block}>
        <p className={classes.header}>Previous</p>
        <div className={classes.cards}>
          <CardMint img={key} header={"BlastOne: Key"} startsIn={"2d 01h 13m"} supply={"444"}/>
          <CardMint img={key} header={"BlastOne: Key"} startsIn={"2d 01h 13m"} supply={"444"}   />
        </div>
      </div>
    </div>
  );
};

export default LaunchPad;
