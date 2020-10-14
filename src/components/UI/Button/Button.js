import React from "react";
import classes from "./Button.css";

//always assign the Button class but also the success or danger class
//so we also need to join them fe Button Success
const button = (props) => (
  <button
    disabled={props.disabled}
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
