import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>AlbionGG</h1>
      <Link to="/goldenprice">Golden Price</Link>
    </nav>
  );
};

export default Navbar;
