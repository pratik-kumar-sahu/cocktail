import React from "react";
import { Link } from "react-router-dom";

function LeftContainer() {
  return (
    <div className="leftContainer">
      <form className="leftContainer__search">
        <input
          className="leftContainer__search--inputBox"
          type="search"
          placeholder="Search cocktails"
        />
      </form>
      <Link className="test" to="/">
        Home
      </Link>
      <Link className="test" to="/about">
        About
      </Link>
    </div>
  );
}

export default LeftContainer;
