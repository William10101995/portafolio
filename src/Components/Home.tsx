import React from "react";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import { pageTransition, durationTransition } from "../scripts/frameMotion";
import "./Home.css";

//Component Home
export const Home = () => {
  return (
    <div className="contenedor-home">
      <Navbar />
      <motion.div
        className="contenedor-home"
        initial="in"
        animate="out"
        exit="in"
        transition={durationTransition}
        variants={pageTransition}
      >
        <h1>Bienvenido al Home</h1>
      </motion.div>
    </div>
  );
};
