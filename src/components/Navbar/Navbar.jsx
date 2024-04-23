import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/html/">Contact</a>
      <a href="/css/">Info</a>
      <a href="/js/">Login</a>
      <a href="/python/">Sign Up</a>
    </nav>
  );
};

export default Navbar;
