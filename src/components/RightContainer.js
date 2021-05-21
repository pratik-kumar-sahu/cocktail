import { Link } from "react-router-dom";
import React from "react";
import Card from "./Card";

function RightContainer() {
  return (
    <div className="rightContainer">
      <Link style={{ color: "inherit", textDecoration: "none" }} to="/details">
        <Card />
      </Link>
    </div>
  );
}

export default RightContainer;
