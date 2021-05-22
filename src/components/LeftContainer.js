import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../contexts/AppContext";

function LeftContainer(props) {
  const { search, setSearch, disabled, setDisabled } = useContext(AppContext);

  useEffect(() => {
    if (props.location.pathname !== "/") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [props, setDisabled]);

  return (
    <div className="leftContainer">
      <form className="leftContainer__search">
        <input
          className="leftContainer__search--inputBox"
          type="search"
          disabled={disabled}
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
