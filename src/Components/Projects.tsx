import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { pageTransition, durationTransition } from "../scripts/frameMotion";
import "./Projects.css";
import { myData } from "../data/MyData";

import "../data/i18next";
import { useTranslation } from "react-i18next";
// Project component
export const Projects = () => {
  const { t } = useTranslation();
  return (
    <div className="contenedor-projects">
      <Navbar />
      <motion.div
        className="contenedor-home"
        initial="in"
        animate="out"
        exit="in"
        transition={durationTransition}
        variants={pageTransition}
      >
        <div className="contenedorsinnavprojects">
          {myData.Projects.map((project) => {
            return (
              <div className="project" key={project.id}>
                <img src={project.Image} alt="card projects" />
                <div className="bodycard">
                  <h1>{t(`${project.Ntrad}`)}</h1>
                  <p>{t(`${project.Dtrad}`)}</p>
                  <form action={project.Link} method="get" target="_blank">
                    <button>{t("ViewRepo")} </button>
                  </form>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};
