import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <h2 className="error">
      404! Page Not Found
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
          marginLeft: ".5rem",
        }}
        to="/"
      >
        <button style={{ padding: ".1rem .3rem", cursor: "pointer" }}>
          Back to Home
        </button>
      </Link>
    </h2>
  );
}

export default Error;
