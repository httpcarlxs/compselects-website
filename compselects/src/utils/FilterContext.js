import React, { useState, createContext } from "react";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterType, setFilterType] = useState([]); // Agora é uma lista
  const [filterTheme, setFilterTheme] = useState([]); // Agora é uma lista

  return (
    <FilterContext.Provider value={{ filterType, setFilterType, filterTheme, setFilterTheme }}>
      {children}
    </FilterContext.Provider>
  );
};
