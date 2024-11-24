import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from "../Assets/logo.png";
import '../App.css';

function Header() {
  return (
    <>
      <div className="nav">
        <h2 className="logo">
          BV
          {/* <img src={logo} className="logo" alt="brand" /> */}
        </h2>
        <nav className="menu">


       


          <NavLink 
            to="/home"
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Header;
