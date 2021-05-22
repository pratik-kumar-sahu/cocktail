import React from "react";
import infinity from "../Infinity.svg";

function Loading() {
  return (
    <div className="loader">
      <img className="loader__infinity" src={infinity} alt="loading..." />
    </div>
  );
}

export default Loading;
