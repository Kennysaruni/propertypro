import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container">
      <h2 className="logo">PropertyPro</h2>
      <div className="nav-items">
        <div className="nav-item">
          <Link to="/dashboard">Dashboard</Link>
          {/* <a href="/">Home</a> */}
        </div>
        <div className="nav-item">
          <Link to="/properties">Properties</Link>
          {/* <a href="/">Resources</a> */}
        </div>
        <div className="nav-item">
          <Link to="/tenants">Tenants</Link>
          {/* <a href="/">Houses</a> */}
        </div>
        <div className="nav-item">
          <Link to="/maintenance">Maintenance</Link>
          {/* <a href="/">Houses</a> */}
        </div>
        <div className="login">
          <button className="sign-in">Sign in</button>
          <button className="get-started">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
