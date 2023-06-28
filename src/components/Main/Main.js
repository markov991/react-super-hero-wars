import React, { useEffect, useState } from "react";
import "./Main.css";

import Team from "../Team/Team";
import FightButton from "../UI/FightButton/FightButton";
import FightResult from "../FightResult/FightResult";

const Main = () => {
  const [teamOneStr, setTeamOneStr] = useState();
  const [teamTwoStr, setTeamTwoStr] = useState();
  const [wonStatement, setWonStatemant] = useState("");
  const [fightResultDisplay, setFightResultDisplay] = useState(false);

  const fightHandler = () => {
    setFightResultDisplay(true);
    setTimeout(() => {
      setFightResultDisplay(false);
    }, 2000);
  };

  useEffect(() => {
    if (teamOneStr > teamTwoStr) {
      setWonStatemant("TEAM 1 IS WINNER");
    }
    if (teamTwoStr > teamOneStr) {
      setWonStatemant("TEAM 2 IS WINNER");
    }
    if (teamOneStr === teamTwoStr) {
      setWonStatemant("IT IS A DROW");
    }
  }, [teamOneStr, teamTwoStr]);

  const teamOneStrenght = (strenght) => {
    if (strenght.length > 0) {
      setTeamOneStr(strenght.reduce((acc, cur) => acc + cur));
    } else setTeamOneStr(0);
  };

  const teamTwoStrenght = (strenght) => {
    if (strenght.length > 0) {
      setTeamTwoStr(strenght.reduce((acc, cur) => acc + cur));
    } else setTeamTwoStr(0);
  };
  return (
    <div className="main-content-screen">
      <Team teamStrenght={teamOneStrenght} teamName={1} />
      <Team teamStrenght={teamTwoStrenght} teamName={2} />
      <FightButton fightHandler={fightHandler} />
      {fightResultDisplay && <FightResult fightResult={wonStatement} />}
    </div>
  );
};

export default Main;
