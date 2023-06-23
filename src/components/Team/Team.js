import React from "react";
import TeamsContainter from "../TeamsContainer/TeamsContainter";

const Team = ({ teamName }) => {
  return (
    <div>
      <h2>Team {teamName}</h2>
      <TeamsContainter />
    </div>
  );
};

export default Team;
