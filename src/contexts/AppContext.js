import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

function AppContextProvider(props) {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [disabled, setDisabled] = useState(false);

  const fetchDrinks = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      const { drinks } = data;
      if (drinks) {
        setCocktails(drinks);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrinks();
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
        loading,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
