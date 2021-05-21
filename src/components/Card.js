import React from "react";

function Card({ idDrink, strDrink, strAlcoholic, strGlass, strDrinkThumb }) {
  return (
    <div className="rightContainer__card">
      <img
        className="rightContainer__card--image"
        src={strDrinkThumb}
        alt={strDrink}
      />
      <div className="rightContainer__card--content">
        <div className="rightContainer__card--content-h2">
          <h2>{strDrink}</h2>
          <p style={{ color: "orangered" }}>{strAlcoholic}</p>
        </div>
        <h3>{strGlass}</h3>
      </div>
    </div>
  );
}

export default Card;
