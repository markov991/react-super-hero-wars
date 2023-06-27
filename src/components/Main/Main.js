import React from "react";
import "./Main.css";

import Team from "../Team/Team";
import FightButton from "../UI/FightButton/FightButton";

const Main = () => {
  const fightHandler = () => {
    console.log("FIGHT !!!");
  };
  return (
    <div className="main-content-screen">
      <Team teamName={1} />
      <Team teamName={2} />
      <FightButton fightHandler={fightHandler} />
    </div>
  );
};

export default Main;
