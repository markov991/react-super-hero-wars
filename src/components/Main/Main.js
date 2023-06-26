import React, { useEffect, useState } from "react";
import "./Main.css";

import Team from "../Team/Team";

const Main = () => {
  return (
    <div className="main-content-screen">
      <Team teamName={1} />
      <Team teamName={2} />
    </div>
  );
};

export default Main;
