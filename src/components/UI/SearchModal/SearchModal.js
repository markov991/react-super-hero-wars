import React, { useEffect, useState } from "react";
import "./SearchModal.css";
import SearchHerosInput from "../../SearchHerosInput/SearchHerosInput";
import HeroInfoModal from "../HeroInfoModal/HeroInfoModal";

const SearchModal = ({ searchPar, searchResults }) => {
  const [results, setResults] = useState([]);
  const [heroInfo, SetHeroInfo] = useState({});
  const [openHeroInfoModal, setOpenHeroInfoModal] = useState(false);

  useEffect(() => {
    setResults(searchResults);
    console.log(results);
  }, [searchResults]);

  const heroInfoHandler = (e) => {
    setOpenHeroInfoModal(true);
    SetHeroInfo(e);
    console.log(e);
  };
  const closeHandle = (e) => {
    e.preventDefault();
    setOpenHeroInfoModal(false);
  };

  console.log(heroInfoHandler);

  return (
    <div className="search-modal">
      <SearchHerosInput searchPar={searchPar} />
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
        <HeroInfoModal closeHandle={closeHandle} hero={heroInfo} />
      )}
    </div>
  );
};

export default SearchModal;
