import React, { useState, useEffect } from "react";
import "./Team.css";
import TeamsContainter from "../TeamsContainer/TeamsContainter";
import SearchModal from "../UI/SearchModal/SearchModal";

const Team = ({ teamName }) => {
  const [searchModal, setSearchModal] = useState(false);
  const [team, setTeam] = useState([]);

  const [searchPar, setSearchPar] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then((res) => res.json())
      .then((data) => {
        setTeam([...team, data[Math.floor(Math.random() * data.length)]]);
      });
  }, []);

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

  const addingHeroHandeler = (e) => {
    setSearchModal(true);
  };

  const addingHeroToTeam = (e) => {
    setTeam([...team, e]);
    setSearchModal(false);
    console.log(e);
  };

  return (
    <div>
      <h2 className="team-name">Team {teamName}</h2>
      <TeamsContainter
        addingHeroHandeler={addingHeroHandeler}
        teamHeroes={team}
      />
      {searchModal && (
        <SearchModal
          addingHeroToTeam={addingHeroToTeam}
          searchResults={data}
          searchPar={searchInputPar}
        />
      )}
    </div>
  );
};

export default Team;
