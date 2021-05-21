import React from "react";

function RightContainer() {
  return (
    <div className="rightContainer">
      <div className="rightContainer__card">
        <img
          className="rightContainer__card--image"
          src="https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg"
          alt="cocktail-img"
        />
        <div className="rightContainer__card--content">
          <div className="rightContainer__card--content-h2">
            <h2>strDrink</h2>
            <p style={{ color: "orangered" }}>strAlcoholic</p>
          </div>
          <h3>strGlass</h3>
        </div>
      </div>
    </div>
  );
}

export default RightContainer;
