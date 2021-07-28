import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { pageTransition, durationTransition } from "../scripts/frameMotion";
import "./Projects.css";
import { myData } from "../data/MyData";

// Project component
export const Projects = () => {
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
              <div className="project">
                <img src={project.Image} alt="card projects" />
                <div className="bodycard">
                  <h1>{project.Name}</h1>
                  <p>{project.Description}</p>
                  <form action={project.Link} method="get" target="_blank">
                    <button>View Repo</button>
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
