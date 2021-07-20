import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { pageTransition, durationTransition } from "../scripts/frameMotion";
import "./Projects.css";


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
	transition = {durationTransition}
        variants={pageTransition}
      >
        <h1>Projects</h1>
      </motion.div>
    </div>
  );
};
