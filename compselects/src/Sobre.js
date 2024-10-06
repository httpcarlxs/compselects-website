import React from "react";
import History from "./components/history/history";
import Team from "./components/team/team";
import Partners from "./components/partners/partners";

function Sobre() {
  return (
    <div className="about-container">
      <History />
      <Team />
      <Partners />
    </div>
  );
}

export default Sobre;
