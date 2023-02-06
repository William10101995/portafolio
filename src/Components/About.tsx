import React from "react";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import { pageTransition, durationTransition } from "../scripts/frameMotion";
import { myData } from "../data/MyData";
import "./About.css";
import "../data/i18next";
import { useTranslation } from "react-i18next";
//Components
export const About = () => {
  const { t } = useTranslation();

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
            <img src={t("Image")} alt="imgage william lopez" />
          </div>
          <div className="columnaizquierda">
            <div className="filaarriba">
              <h1> {t("about")} </h1>
              <p> {t("Description")} </p>
            </div>
            <div className="filaskill">
              <div className="hardskill">
                <h2> {t("Hard")} </h2>
                <ul>
                  {myData.HardSkills.map((skill) => {
                    return <li key={skill.id}> {t(`${skill.Htrad}`)} </li>;
                  })}
                </ul>
              </div>
              <div className="softskill">
                <h2> {t("Soft")} </h2>

                <ul>
                  {myData.SoftSkills.map((skill) => {
                    return <li key={skill.id}> {t(`${skill.Strad}`)} </li>;
                  })}
                </ul>
              </div>
            </div>
            {/* <div className="filaabajo">
              <h2> {t("hab")} </h2>
              {myData.Skills.map((skill) => {
                return (
                  <div className="skill" key={skill.id}>
                    <h3>{skill.name}</h3>
                    <div className="progress">
                      <div
                        className={skill.color}
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
            </div> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
