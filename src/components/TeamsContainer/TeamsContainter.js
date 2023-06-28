import React, { useEffect, useState } from "react";
import "./TeamsContainter.css";
import AddHeroButton from "../UI/AddHeroButton/AddHeroButton";
import HeroInfoModal from "../UI/HeroInfoModal/HeroInfoModal";

const TeamsContainter = ({ teamHeroes, addingHeroHandeler, removeHeroId }) => {
  const [heroList, setHeroList] = useState([]);
  const [openHeroInfoModal, setOpenHeroInfoModal] = useState(false);
  const [heroInfo, SetHeroInfo] = useState({});

  useEffect(() => {
    setHeroList(teamHeroes);
  }, [teamHeroes]);

  const heroInfoHandler = (e) => {
    setOpenHeroInfoModal(true);
    SetHeroInfo(e);
  };

  const removeHeroHandle = () => {
    removeHeroId(heroInfo.id);

    setOpenHeroInfoModal(false);
  };

  const closeHandle = () => {
    setOpenHeroInfoModal(false);
  };

  return (
    <div className="teams-containter">
      {heroList.map((hero) => (
        <div onClick={() => heroInfoHandler(hero)} key={hero.id}>
          <img className="hero-containter-img" src={hero.images.sm} />
        </div>
      ))}
      {heroList.length < 5 && (
        <AddHeroButton addingHeroHandeler={addingHeroHandeler} />
      )}
      {openHeroInfoModal && (
        <HeroInfoModal
          removeHeroHandle={removeHeroHandle}
          locationOfComponent={"TEAM_MODAL"}
          hero={heroInfo}
          closeHandle={closeHandle}
        />
      )}
    </div>
  );
};

export default TeamsContainter;
