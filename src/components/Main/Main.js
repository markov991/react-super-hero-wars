import React, { useState } from "react";
import "./Main.css";

import Team from "../Team/Team";
import SearchModal from "../UI/SearchModal/SearchModal";

const Main = () => {
  // const [teamOne,setTeamOne]=useState([])
  // const [teamTwo,setTeamTwo]=useState([])
  const [searchModal, setSearchModal] = useState(true);
  const teamNumber = 2;

  const addHeroHandelerTeamOne = () => {
    // setSearchModal(true);
    console.log("hello team 1");
  };
  const addHeroHandelerTeamTwo = () => {
    console.log("hello team 2");
  };
  return (
    <div className="main-content-screen">
      <Team addingHeroHandeler={addHeroHandelerTeamOne} teamName={1} />
      <Team addingHeroHandeler={addHeroHandelerTeamTwo} teamName={2} />
      {searchModal && <SearchModal />}
    </div>
  );
};

export default Main;
