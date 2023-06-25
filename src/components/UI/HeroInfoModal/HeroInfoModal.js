import React from "react";
import "./HeroInfoModal.css";

const HeroInfoModal = ({ hero, closeHandle, addHeroHandle }) => {
  return (
    <div className="hero-info-modal">
      <img className="hero-img" src={hero.images.sm} />\
      <div>
        <div className="hero-name-modal">{hero.name}</div>
        <div className="hero-stats">
          <div>
            Combat: <span>{hero.powerstats.combat}</span>
          </div>
          <div>
            Durability: <span>{hero.powerstats.durability}</span>
          </div>
          <div>
            Intelligence: <span>{hero.powerstats.intelligence}</span>
          </div>
          <div>
            Power: <span>{hero.powerstats.power}</span>
          </div>
          <div>
            Speed: <span>{hero.powerstats.speed}</span>
          </div>
          <div>
            Strength: <span>{hero.powerstats.strength}</span>
          </div>
        </div>
        <div className="modal-info-btns">
          <button onClick={addHeroHandle}>Add</button>
          <button onClick={closeHandle}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default HeroInfoModal;
