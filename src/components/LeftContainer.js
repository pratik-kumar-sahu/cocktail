import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

function LeftContainer() {
  const { search, setSearch } = useContext(AppContext);

  return (
    <div className="leftContainer">
      <form className="leftContainer__search">
        <input
          className="leftContainer__search--inputBox"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
