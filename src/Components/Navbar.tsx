import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import { MdClearAll } from "react-icons/md";
import "./Navbar.css";
import "../data/i18next";
import { useTranslation } from "react-i18next";
// Navbar component
export const Navbar = () => {
  const { t } = useTranslation();
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
            {t("init")}
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/about"
            activeClassName="active"
            className="link"
            onClick={handleClick}
          >
            {t("about")}
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/projects"
            activeClassName="active"
            className="link"
            onClick={handleClick}
          >
            {t("proyec")}
          </NavLink>
        </li>
        <li className="item">
          <NavLink
            to="/contact"
            activeClassName="active"
            className="link"
            onClick={handleClick}
          >
            {t("contact")}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
