import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

function AppContextProvider(props) {
  const [cocktails, setCocktails] = useState([]);
  const [search, setSearch] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setCocktails(data.drinks);
      });
  }, [search]);

  return (
    <AppContext.Provider
      value={{
        cocktails,
        setCocktails,
        search,
        setSearch,
        disabled,
        setDisabled,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
