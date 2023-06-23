import React from "react";
import "./Team.css";
import TeamsContainter from "../TeamsContainer/TeamsContainter";

const Team = ({ teamName, addingHeroHandeler }) => {
  const x = [];
  return (
    <div>
      <h2 className="team-name">Team {teamName}</h2>
      <TeamsContainter addingHeroHandeler={addingHeroHandeler} teamHeroes={x} />
    </div>
  );
};

export default Team;
