import React from "react";
import PublicationsList from "./components/publications/PublicationsList";
import Filter from "./components/publications/Filter";

function Publicacoes() {
  return (
    <div className="publications-container">
      <Filter />
      <PublicationsList />
    </div>
  );
}

export default Publicacoes;
