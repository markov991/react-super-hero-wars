import React, { useEffect, useState } from "react";
import "./SearchModal.css";
import SearchHerosInput from "../../SearchHerosInput/SearchHerosInput";
import HeroInfoModal from "../HeroInfoModal/HeroInfoModal";

const SearchModal = ({ searchPar, searchResults, addingHeroToTeam }) => {
  const [results, setResults] = useState([]);
  const [heroInfo, SetHeroInfo] = useState({});
  const [openHeroInfoModal, setOpenHeroInfoModal] = useState(false);
  const [randomHero, setRandomHero] = useState(null);

  useEffect(() => {
    setResults(searchResults);
  }, [searchResults]);

  useEffect(() => {
    if (randomHero) {
      fetch("https://akabab.github.io/superhero-api/api/all.json")
        .then((res) => res.json())
        .then((data) => {
          SetHeroInfo(data[randomHero]);
          setOpenHeroInfoModal(true);
        });
    }
  }, [randomHero]);

  const randomHeroHandler = () => {
    setRandomHero(Math.floor(Math.random() * 563));
  };

  const heroInfoHandler = (e) => {
    setOpenHeroInfoModal(true);
    SetHeroInfo(e);
  };

  const addHeroHandle = () => {
    addingHeroToTeam(heroInfo);
  };

  const closeHandle = (e) => {
    e.preventDefault();
    setOpenHeroInfoModal(false);
  };

  return (
    <div className="search-modal">
      <SearchHerosInput
        randomHeroHandler={randomHeroHandler}
        searchPar={searchPar}
      />
      <div className="search-results">
        {results &&
          results.slice(0, 5).map((result) => (
            <div onClick={() => heroInfoHandler(result)} key={result.id}>
              <img src={result.images.sm} />
              <div className="hero-name">{result.name}</div>
            </div>
          ))}
      </div>
      {openHeroInfoModal && (
        <HeroInfoModal
          locationOfComponent={"SEARCH_MODAL"}
          addHeroHandle={addHeroHandle}
          closeHandle={closeHandle}
          hero={heroInfo}
        />
      )}
    </div>
  );
};

export default SearchModal;
