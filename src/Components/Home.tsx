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
import FlagEs from "../Images/es.png";
import FlagEn from "../Images/en.png";

import "../data/i18next";
import { useTranslation } from "react-i18next";

//Component Home
export const Home = () => {
  const { t, i18n } = useTranslation();
  console.log(t("app_name"));
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
            <img src={t("Image")} alt="my personal image" />
          </div>
          <h1>
            {t("Slogan")}
            <span className="estilonombre">{t("FirstName")}</span>
          </h1>

          <div className="contenedorsocial">
            <ul className="socialmedia">
              <li className="socialitem">
                <a
                  href={personalData.myData.SocialMedia.Facebook}
                  className="facebook"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className="socialitem">
                <a
                  href={personalData.myData.SocialMedia.Twitter}
                  className="twitter"
                  target="_blank"
                >
                  <FaTwitter />
                </a>
              </li>
              <li className="socialitem">
                <a
                  href={personalData.myData.SocialMedia.Instagram}
                  className="ig"
                  target="_blank"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className="socialitem">
                <a
                  href={personalData.myData.SocialMedia.Linkedin}
                  className="linkedin"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className="socialitem">
                <a
                  href={personalData.myData.SocialMedia.GitHub}
                  className="git"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
          <div className="lenguage">
            <ul className="leng">
              <li className="lengitem">
                <button
                  onClick={() => i18n.changeLanguage("en")}
                  disabled={i18n.language === "en"}
                >
                  <img src={FlagEn} alt="flag english" />
                </button>
              </li>
              <li className="lengitem">
                <button
                  onClick={() => i18n.changeLanguage("ar")}
                  disabled={i18n.language === "ar"}
                >
                  <img src={FlagEs} alt="flag es" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
