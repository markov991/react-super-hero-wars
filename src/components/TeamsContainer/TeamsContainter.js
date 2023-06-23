import React from "react";
import "./TeamsContainter.css";
import AddHeroButton from "../UI/AddHeroButton/AddHeroButton";

const TeamsContainter = ({ teamHeroes, addingHeroHandeler }) => {
  return (
    <div className="teams-containter">
      {teamHeroes.map((hero) => {
        <div>
          <img class="hero-img" src={hero.img} alt="" />
        </div>;
      })}
      <AddHeroButton addingHeroHandeler={addingHeroHandeler} />
    </div>
  );
};

export default TeamsContainter;
