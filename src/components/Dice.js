import React from "react";

import d1 from "../img/dice-1.png";
import d2 from "../img/dice-2.png";
import d3 from "../img/dice-3.png";
import d4 from "../img/dice-4.png";
import d5 from "../img/dice-5.png";
import d6 from "../img/dice-6.png";

const Dice = (props) => {
  const dice = [d1, d2, d3, d4, d5, d6];
  let arrValues = props.values;
  if (arrValues[0] !== null) {
    return (
      <div className="Dice">
        <img src={dice[arrValues[0] - 1]} alt="dice1" />
        <img src={dice[arrValues[1] - 1]} alt="dice2" />
      </div>
    );
  } else {
    return <div className="Dice"></div>;
  }
};
export default Dice;
