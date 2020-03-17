import React from "react";
import "./Nav.css";
import logo from "./logo.png";
const Nav = () => {
  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <div className="navbar-brand">
          <img src={logo} alt="Home" /> Saarthi.ai
        </div>
        <ul className="navbar nav-links navbar-right">
          <li className="nav-item">Home</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
