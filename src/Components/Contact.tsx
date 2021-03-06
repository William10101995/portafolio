import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { pageTransition, durationTransition } from "../scripts/frameMotion";
import * as emailjs from "emailjs-com";
import "./Contact.css";
import { myData } from "../data/MyData";
import {
  RiWhatsappFill,
  RiMapPinUserFill,
  RiMailSendFill,
} from "react-icons/ri";

import "../data/i18next";
import { useTranslation } from "react-i18next";

// Contact component
export const Contact = () => {
  const { t } = useTranslation();
  // Initialize state data
  const [datos, setDatos] = useState({
    fullname: "",
    email: "",
    phone: "",
    affair: "",
    message: "",
  });

  //handdle input change
  const handleInputChange = (e: any) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };
  // Initial state component
  const [send, setSend] = useState(false);

  // Send button
  const handleClick = (e: any) => {
    if (
      datos.fullname != "" &&
      datos.email != "" &&
      datos.phone != "" &&
      datos.affair != "" &&
      datos.message != ""
    ) {
      setSend(true);
      e.preventDefault();
      emailjs
        .sendForm(
          "service_7l96ivh",
          "template_amt8mip",
          e.target,
          "user_4qQ9W9Mah6DyLBxYTYogA"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("Por favor complete todos los campos");
    }
  };

  //Contacto component
  const Contacto = () => {
    return (
      <div className="contenedorcontact">
        <div className="formulario">
          <form action="" onSubmit={handleClick}>
            <p>
              <label htmlFor="fullname">{t("AyN")}</label>
              <input
                type="text"
                onChange={handleInputChange}
                name="fullname"
                placeholder="Jean Doe"
                id="fullname"
              />
            </p>
            <p>
              <label htmlFor="email">{t("email")}</label>
              <input
                type="email"
                onChange={handleInputChange}
                name="email"
                placeholder="jeandoe@example.com"
                id="email"
              />
            </p>
            <p>
              <label htmlFor="phone">{t("tel")}</label>
              <input
                type="tel"
                onChange={handleInputChange}
                name="phone"
                placeholder="+54 9 362-4111265"
                id="phone"
              />
            </p>
            <p>
              <label htmlFor="affair">{t("asunto")}</label>
              <input
                type="text"
                onChange={handleInputChange}
                name="affair"
                placeholder={t("DS")}
                id="affair"
              />
            </p>
            <p className="block">
              <label htmlFor="message">{t("mensaje")}</label>
              <textarea
                name="message"
                onChange={handleInputChange}
                placeholder={t("DM")}
                id="message"
              ></textarea>
            </p>
            <p className="block">
              <button type="submit" className="btn-contact">
                {t("enviar")}
              </button>
            </p>
          </form>
        </div>
        <div className="info">
          <h3>{t("info")}</h3>
          <ul>
            <li>
              <RiWhatsappFill className="icon-whatsapp" />
              {myData.Phone}
            </li>
            <li>
              <RiMapPinUserFill className="icon-map-pin" /> {myData.City},{" "}
              {myData.State}
            </li>
            <li>
              <RiMailSendFill className="icon-mail-send" /> {myData.Email}
            </li>
          </ul>
          <p>{t("sloganI")}</p>
        </div>
      </div>
    );
  };

  //Message component
  const MessageBefore = () => {
    return (
      <motion.div
        className="contenedor-home"
        initial="in"
        animate="out"
        exit="in"
        transition={durationTransition}
        variants={pageTransition}
      >
        <h5 className="messagebefore">{t("ok")}</h5>
      </motion.div>
    );
  };

  //Return components
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
        <div className="contenedorsinnavcontact">
          <h1>{t("contactate")}</h1>
          {send ? <MessageBefore /> : Contacto()}
        </div>
      </motion.div>
    </div>
  );
};
