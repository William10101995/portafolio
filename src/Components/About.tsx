import React from "react";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import { pageTransition, durationTransition } from "../scripts/frameMotion";
import { myData } from "../data/MyData";
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
        transition={durationTransition}
        variants={pageTransition}
      >
        <div className="contenedorsinnav">
          <div className="columnaderecha">
            <img src={myData.Image} alt="imgage william lopez" />
          </div>
          <div className="columnaizquierda">
            <div className="filaarriba">
              <h1> About me </h1>
              <p> {myData.Description} </p>
            </div>
            <div className="filaabajo">
              <h2> Skills </h2>
              {myData.Skills.map((skill) => {
                return (
                  <div className="skill" key={skill.id}>
                    <h3>{skill.name}</h3>
                    <div className="progress">
                      <div
                        className="progress-value"
                        style={{
                          animation: `${skill.name} 3s normal forwards`,
                        }}
                      >
                        {" "}
                        <style> {skill.progress}</style>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
