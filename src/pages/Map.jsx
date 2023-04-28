import React from "react";
import { Link } from "react-router-dom";

export const Map = () => {
  return (
    <div className="text-center">
      <h1>Map page</h1>
      <Link to="/" className="text-red-500 mr-4 underline">
        go back to dashboard
      </Link>
    </div>
  );
};
