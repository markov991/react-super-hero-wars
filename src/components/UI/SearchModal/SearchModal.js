import React, { useEffect, useState } from "react";
import "./SearchModal.css";
import SearchHerosInput from "../../SearchHerosInput/SearchHerosInput";

const SearchModal = ({ searchPar, searchResults, heroInfoHandler }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    setResults(searchResults);
    console.log(results);
  }, [searchResults]);

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
    </div>
  );
};

export default SearchModal;
