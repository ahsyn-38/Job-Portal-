import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="page notfound">
      <div className="content">
        <img src="notfound.png" alt="" />
        <Link to={"/"}>Retrun to Home</Link>
      </div>
    </section>
  );
  console.error(error);
};

export default NotFound;
