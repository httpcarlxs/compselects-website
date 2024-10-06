import React, { useContext } from "react";
import { FilterContext } from "../../utils/FilterContext";
import "./Filter.css";

function Filter() {
  const { setFilterType, setFilterTheme } = useContext(FilterContext);

  const handleTypeChange = (event) => {
    const { value, checked } = event.target;
    setFilterType((prevFilters) =>
      checked ? [...prevFilters, value] : prevFilters.filter((filter) => filter !== value)
    );
  };

  const handleThemeChange = (event) => {
    const { value, checked } = event.target;
    setFilterTheme((prevFilters) =>
      checked ? [...prevFilters, value] : prevFilters.filter((filter) => filter !== value)
    );
  };

  return (
    <div className="filters">
      <div className="filter-group">
        <h3>Filtrar por Tipo:</h3>
        <label>
          <input type="checkbox" value="livro" onChange={handleTypeChange} /> Livros
        </label>
        <label>
          <input type="checkbox" value="periodico" onChange={handleTypeChange} /> Periódicos
        </label>
      </div>

      <div className="filter-group">
        <h3>Filtrar por Tema:</h3>
        <label>
          <input type="checkbox" value="Autoajuda" onChange={handleThemeChange} /> Autoajuda
        </label>
        <label>
          <input type="checkbox" value="Estudos" onChange={handleThemeChange} /> Estudos
        </label>
        <label>
          <input type="checkbox" value="Romance" onChange={handleThemeChange} /> Romance
        </label>
        <label>
          <input type="checkbox" value="Ficção" onChange={handleThemeChange} /> Ficção
        </label>
      </div>
    </div>
  );
}

export default Filter;
