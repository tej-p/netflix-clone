import React from "react";
import logo from "../../logo.png";
import "./Navbar.scss";
import { BsSearch  } from "react-icons/bs";
import {Link} from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" />
      <div>
        <Link to="/tvShows"> TV Shows</Link>
        <Link to="/movies"> Movies</Link>
        <Link to="/popular"> Popular</Link>
        <Link to="/myList"> My List</Link>
      </div>
      <BsSearch />
    </nav>
  );
};
