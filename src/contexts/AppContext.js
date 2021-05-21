import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

function AppContextProvider(props) {
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState("a");

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCocktails(data.drinks);
      });
  }, [search]);

  return (
    <AppContext.Provider value={{ cocktails, setCocktails, search, setSearch }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
