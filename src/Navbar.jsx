import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="navlist">
        <Link to="/">
          <li className="navlist-item">Home</li>
        </Link>
        <Link to="/about">
          <li className="navlist-item">About</li>
        </Link>
        <Link to="/contact">
          <li className="navlist-item">Contact</li>
        </Link>
        <Link to="/login">
          <li className="navlist-item">Login</li>
        </Link>
        <Link to="/register">
          <li className="navlist-item">Register</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
