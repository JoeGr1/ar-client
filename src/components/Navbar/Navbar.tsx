import React from "react";

import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <ul className="navbar__link-list">
        <Link to="/" className="navbar__link">
          Home
        </Link>
        <Link to="/gallery" className="navbar__link">
          Gallery
        </Link>
        <Link to="/big-texture-club" className="navbar__link">
          Big Texture Club
        </Link>
        <Link to="/about" className="navbar__link">
          About
        </Link>
        <Link to="/contact" className="navbar__link">
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
