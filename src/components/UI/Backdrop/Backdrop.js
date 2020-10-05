import React from "react";
import classes from "./Backdrop.css";

//Clicking backdrop means clicking outside of the Modal so it exits
const backdrop = (props) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;
