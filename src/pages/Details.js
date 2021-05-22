import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function Details(props) {
  const { cocktails } = useContext(AppContext);
  const id = props.match.params.id;
  const cocktail = cocktails.filter((e) => e.idDrink === id);
  const {
    strDrinkThumb,
    strDrink,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
  } = cocktail[0];

  return (
    <div className="details">
      {cocktail.length > 0 && (
        <>
          <div className="details__ingredients">
            <img
              className="details__ingredients-image"
              src={strDrinkThumb}
              alt={strDrink}
            />
            <div>
              <h1>Top Ingredients</h1>
              <div className="details__ingredients-list">
                {strIngredient1 && <li>{strIngredient1}</li>}
                {strIngredient2 && <li>{strIngredient2}</li>}
                {strIngredient3 && <li>{strIngredient3}</li>}
                {strIngredient4 && <li>{strIngredient4}</li>}
                {strIngredient5 && <li>{strIngredient5}</li>}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Details;
