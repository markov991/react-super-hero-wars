import React, { useEffect, useState } from "react";
import "./TeamsContainter.css";
import AddHeroButton from "../UI/AddHeroButton/AddHeroButton";

const TeamsContainter = ({ teamHeroes, addingHeroHandeler }) => {
  const [heroList, setHeroList] = useState([]);

  useEffect(() => {
    setHeroList(teamHeroes);
    console.log(heroList);
  }, [teamHeroes]);

  return (
    <div className="teams-containter">
      {heroList.map((hero) => (
        <div key={hero.id}>
          <img className="hero-containter-img" src={hero.images.sm} alt="" />
        </div>
      ))}
      <AddHeroButton addingHeroHandeler={addingHeroHandeler} />
    </div>
  );
};

export default TeamsContainter;
