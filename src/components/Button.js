import React from "react";
import "../App.css";

const Button = (props) => {
  return (
    <button onClick={props.funcClick} className="Button">
      <h6> {props.title}</h6>
    </button>
  );
};
export default Button;
