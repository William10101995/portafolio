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
            Inicio
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/about"
            activeClassName="active"
            className="link"
            onClick={handleClick}
          >
            Sobre Mi
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/projects"
            activeClassName="active"
            className="link"
            onClick={handleClick}
          >
            Proyectos
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/contact"
            activeClassName="active"
            className="link"
            onClick={handleClick}
          >
            Contacto
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
