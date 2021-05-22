import { Link } from "react-router-dom";
import React, { useContext } from "react";
import Card from "./Card";
import { AppContext } from "../contexts/AppContext";
import Loading from "./Loading";

function RightContainer() {
  const { cocktails, loading } = useContext(AppContext);

  if (loading) {
    return <Loading />;
  }

  if (cocktails.length < 1) {
    return (
      <div className="error">
        No cocktails matched. Try searching another one
      </div>
    );
  }

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
