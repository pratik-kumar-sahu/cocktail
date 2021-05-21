import { Link } from "react-router-dom";
import React, { useContext } from "react";
import Card from "./Card";
import { AppContext } from "../contexts/AppContext";

function RightContainer() {
  const { cocktails } = useContext(AppContext);

  return (
    <div className="rightContainer">
      {cocktails.map((cocktail) => {
        const { idDrink } = cocktail;
        return (
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            key={idDrink}
            to={`/details/${idDrink}`}
          >
            <Card {...cocktail} />
          </Link>
        );
      })}
    </div>
  );
}

export default RightContainer;
