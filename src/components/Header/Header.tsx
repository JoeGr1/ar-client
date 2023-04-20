import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-wrapper">
      <Link to="/" className="header__home-wrapper">
        <h1 className="header__name">Alexander Randall</h1>
        <h2 className="header__occupation">Artist</h2>
      </Link>
    </div>
  );
};

export default Header;
