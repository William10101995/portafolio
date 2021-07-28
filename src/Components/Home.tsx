import React from "react";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { pageTransition, durationTransition } from "../scripts/frameMotion";
import "./Home.css";
import * as personalData from "../data/MyData";

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
        <div className="contenedorsnav">
          <div className="myimages">
            <img src={personalData.myData.Image} alt="my personal image" />
          </div>
          <h1>
            {personalData.myData.Slogan}{" "}
            <span className="estilonombre">
              {personalData.myData.FirstName}
            </span>
          </h1>
          <div className="contenedorsocial">
            <ul className="socialmedia">
              <li className="socialitem">
                <a href={personalData.myData.SocialMedia.Facebook} className="facebook">
                  <FaFacebook />
                </a>
              </li>
              <li className="socialitem">
                <a href={personalData.myData.SocialMedia.Twitter} className="twitter">
                  <FaTwitter />
                </a>
              </li>
              <li className="socialitem">
                <a href={personalData.myData.SocialMedia.Instagram} className="ig">
                  <FaInstagram />
                </a>
              </li>
              <li className="socialitem">
                <a href={personalData.myData.SocialMedia.Linkedin} className="linkedin">
                  <FaLinkedin />
                </a>
              </li>
              <li className="socialitem">
                <a href={personalData.myData.SocialMedia.GitHub} className="git">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
