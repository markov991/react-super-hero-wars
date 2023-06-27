import React from "react";
import "./FightButton.css";

const FightButton = ({ fightHandler }) => {
  return (
    <div className="fight-button">
      <button onClick={fightHandler}>Fight!!!</button>
    </div>
  );
};

export default FightButton;
