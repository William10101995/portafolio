import React from "react";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import { pageTransition, durationTransition } from "../scripts/frameMotion";
import "./About.css";


//Components
export const About = () => {
  return (
    <div className="contenedor-about">
      <Navbar />
      <motion.div
        className="contenedor-home"
        initial="in"
        animate="out"
        exit="in"
	transition = {durationTransition}
        variants={pageTransition}
      >
        <h1>About</h1>
      </motion.div>
    </div>
  );
};
