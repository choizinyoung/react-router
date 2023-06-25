import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/products">하이</Link>
    </div>
  );
};
export { Home };
