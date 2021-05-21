import React from "react";

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
    </div>
  );
}

export default LeftContainer;
