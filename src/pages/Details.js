import React, { useEffect, useState } from "react";

function Details(props) {
  const [selectedCocktail, setSelectedCocktail] = useState(null);
  const id = Number(props.match.params.id);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setSelectedCocktail(data.drinks);
      });
  }, [id]);

  return (
    <div className="details">
      {selectedCocktail && (
        <>
          <div className="details__contents">
            <img
              className="details__contents-image"
              src={selectedCocktail[0].strDrinkThumb}
              alt={selectedCocktail[0].strDrink}
            />
            <div className="details__contents-info">
              <div>
                <span className="details__contents-info--names">Name</span>
                <span className="details__contents-info--block">
                  {selectedCocktail[0].strDrink}
                </span>
              </div>
              <div>
                <span className="details__contents-info--names">Category</span>
                <span className="details__contents-info--block">
                  {selectedCocktail[0].strCategory}
                </span>
              </div>
              <div>
                <span className="details__contents-info--names">Info</span>
                <span className="details__contents-info--block">
                  {selectedCocktail[0].strAlcoholic}
                </span>
              </div>
              <div>
                <span className="details__contents-info--names">Glass</span>
                <span className="details__contents-info--block">
                  {selectedCocktail[0].strGlass}
                </span>
              </div>
              <div>
                <span className="details__contents-info--names">
                  Instructions
                </span>
                <span className="details__contents-info--block">
                  {selectedCocktail[0].strInstructions}
                </span>
              </div>
            </div>
          </div>

          <div className="details__ingredients">
            <div style={{ fontSize: "2rem", marginRight: "1rem" }}>🥣</div>
            <div className="details__ingredients-list">
              {selectedCocktail[0].strIngredient1 && (
                <li>{selectedCocktail[0].strIngredient1}</li>
              )}
              {selectedCocktail[0].strIngredient2 && (
                <li>{selectedCocktail[0].strIngredient2}</li>
              )}
              {selectedCocktail[0].strIngredient3 && (
                <li>{selectedCocktail[0].strIngredient3}</li>
              )}
              {selectedCocktail[0].strIngredient4 && (
                <li>{selectedCocktail[0].strIngredient4}</li>
              )}
              {selectedCocktail[0].strIngredient5 && (
                <li>{selectedCocktail[0].strIngredient5}</li>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Details;
