import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { jwtLogoutHandler } from "../../utilities/auth";

function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const isGuest = () => user == null;
  const isOwner = () => "owner_id" in user;
  const isTenant = () => "tenant_id" in user;

  function navbarLogoutHandler() {
    setUser(null);
    jwtLogoutHandler(navigate);
  }

  if (isGuest()) {
    return (
      <div className="nav-container">
        <h2 className="logo">PropertyPro</h2>
        <div className="nav-items">
          <div className="nav-item">
            <Link to="/dashboard">Dashboard</Link>
            {/* <a href="/">Home</a> */}
          </div>
          <div className="nav-item">
            <Link to="/listings">Listings</Link>
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
            <button onClick={navigate("/")} className="sign-in">
              Sign in
            </button>
            <button className="get-started">Get Started</button>
          </div>
        </div>
      </div>
    );
  } else if (isOwner()) {
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
            <button className="sign-in" onClick={navigate('/createproperty')} >
              Add Property
            </button>
          </div>
          <div className="login">
            <button className="sign-in" onClick={navbarLogoutHandler}>
              Log Out
            </button>
          </div>
        </div>
      </div>
    );
  } else if (isTenant()) {
    return (
      <div className="nav-container">
        <h2 className="logo">PropertyPro</h2>
        <div className="nav-items">
          <div className="nav-item">
            <Link to="/tenant">Dashboard</Link>
            {/* <a href="/">Home</a> */}
          </div>
          <div className="nav-item">
            <Link to="/properties">Listings</Link>
            {/* <a href="/">Resources</a> */}
          </div>
          <div className="nav-item">
            <Link to="/tenants">Lease</Link>
            {/* <a href="/">Houses</a> */}
          </div>
          <div className="nav-item">
            {/* <Link to="/maintenance">Maintenance</Link> */}
            {/* <a href="/">Houses</a> */}
          </div>
          <div className="login">
            <button className="sign-in" onClick={navbarLogoutHandler}>
              Log Out
            </button>
            {/* <button className="get-started">Get Started</button> */}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Navbar;
