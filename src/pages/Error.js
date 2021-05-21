import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      Page Not Found
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default Error;
