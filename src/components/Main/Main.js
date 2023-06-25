import React, { useEffect, useState } from "react";
import "./Main.css";

import Team from "../Team/Team";
import SearchModal from "../UI/SearchModal/SearchModal";

const Main = () => {
  const [searchPar, setSearchPar] = useState();
  const [data, setData] = useState();
  const [searchModal, setSearchModal] = useState(false);

  useEffect(() => {
    if (searchPar) {
      fetch("https://akabab.github.io/superhero-api/api/all.json")
        .then((res) => res.json())
        .then((data) => {
          const searchResults = data.filter((hero) =>
            hero.name.toLowerCase().includes(searchPar.toLowerCase())
          );

          if (searchPar.length >= 3) {
            setData(searchResults);
          }
          if (searchPar.length <= 2) {
            setData([]);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [searchPar]);

  const addHeroHandelerTeamOne = () => {
    setSearchModal(true);
    console.log("hello team 1");
  };
  const addHeroHandelerTeamTwo = () => {
    setSearchModal(true);
    console.log("hello team 2");
  };

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();

        setSearchModal(false);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  const searchInputPar = (e) => {
    if (e) {
      setSearchPar(e);
    }
  };

  // const heroInfoHandler = (e) => {
  //   console.log(e);
  // };

  return (
    <div className="main-content-screen">
      <Team addingHeroHandeler={addHeroHandelerTeamOne} teamName={1} />
      <Team addingHeroHandeler={addHeroHandelerTeamTwo} teamName={2} />
      {searchModal && (
        <SearchModal
          // heroInfoHandler={heroInfoHandler}
          searchResults={data}
          searchPar={searchInputPar}
        />
      )}
    </div>
  );
};

export default Main;
