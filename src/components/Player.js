import React from "react";

import "./Player.css";
const Player = (props) => {
  let active = props.active;
  let backColor = active ? "#E0EAFC" : "white";
  return (
    <div style={{ backgroundColor: backColor }}>
      <div id={props.id} className="Player">
        <h1>Player {props.id}</h1>
        <div className="score">
          <h3>Current</h3>
          <h2>{props.score}</h2>
        </div>
        <div className="total">
          <h2>Total</h2>
          <h2>{props.total}</h2>
        </div>
      </div>
    </div>
  );
};
export default Player;

