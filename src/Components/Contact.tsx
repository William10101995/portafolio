import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { pageTransition, durationTransition } from "../scripts/frameMotion";
import "./Contact.css";

// Contact component
export const Contact = () => {
  return (
    <div className="contenedor-contact">
      <Navbar />
      <motion.div
        className="contenedor-home"
        initial="in"
        animate="out"
        exit="in"
        transition={durationTransition}
        variants={pageTransition}
      >
        <h1>Contact</h1>
      </motion.div>
    </div>
  );
};
