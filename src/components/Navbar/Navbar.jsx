import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">AlbionGG</Link>
      <Link to="/goldenprice">Golden Price</Link>
    </nav>
  );
};

export default Navbar;
