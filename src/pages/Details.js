import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function Details(props) {
  const { cocktails } = useContext(AppContext);
  const id = props.match.params.id;
  const cocktail = cocktails.filter((e) => e.idDrink === id);
  console.log(cocktail);
  const { strDrinkThumb, strDrink } = cocktail[0];

  return (
    <div className="details">
      {strDrinkThumb && strDrink && <img src={strDrinkThumb} alt={strDrink} />}
    </div>
  );
}

export default Details;
