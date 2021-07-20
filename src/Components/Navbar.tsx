import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import { MdClearAll } from "react-icons/md";
import "./Navbar.css";

// Navbar component
export const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  function handleClick() {
    setisOpen(!isOpen);
  }
  return (
    <div className="contenedor-nav">
      <li className="iconResponsive" onClick={handleClick}>
        <a>{!isOpen ? <MdClearAll /> : <GiCancel />}</a>
      </li>
      <ul className={isOpen ? "menu  active" : "menu"}>
        <li className="item">
          <NavLink
            exact
            to="/"
            activeClassName="active"
            className="link"
            onClick={handleClick}
          >
            Home
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/about"
            activeClassName="active"
            className="link"
            onClick={handleClick}
          >
            About
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/projects"
            activeClassName="active"
            className="link"
            onClick={handleClick}
          >
            Projects
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/contact"
            activeClassName="active"
            className="link"
            onClick={handleClick}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
