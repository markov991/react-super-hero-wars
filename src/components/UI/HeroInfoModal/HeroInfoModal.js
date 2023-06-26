import React, { useState, useEffect } from "react";
import "./HeroInfoModal.css";

const HeroInfoModal = ({
  hero,
  closeHandle,
  addHeroHandle,
  locationOfComponent,
  removeHeroHandle,
}) => {
  const [addBtnIsActive, setAddBtnIsActive] = useState(false);
  const [removeBtnIsActive, setRemoveBtnIsActive] = useState(false);

  useEffect(() => {
    if (locationOfComponent === "SEARCH_MODAL") {
      setAddBtnIsActive(true);
      setRemoveBtnIsActive(false);
    }
    if (locationOfComponent === "TEAM_MODAL") {
      setRemoveBtnIsActive(true);
      setAddBtnIsActive(false);
    }
  }, []);

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
          {addBtnIsActive && <button onClick={addHeroHandle}>Add</button>}
          {removeBtnIsActive && (
            <button onClick={removeHeroHandle}>Remove</button>
          )}
          <button onClick={closeHandle}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default HeroInfoModal;
