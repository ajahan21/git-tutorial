import React from "react";
import { Link } from "react-scroll";
import logo from "../images/lo.jpg";

function Navbar() {
  return (
    <div>
      <nav>
        {/* <Link to="main" className="logo">
          <img src={logo} alt="logo" />
        </Link> */}

        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="main">Home</Link>
          </li>
          <li>
            <Link to="features">Features</Link>
          </li>
          <li>
            <Link to="services">Services</Link>
          </li>
          <li>
            <Link to="subscribe">Subscribe</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>

        <Link to="#" className="hey"></Link>
      </nav>
    </div>
  );
}

export default Navbar;
