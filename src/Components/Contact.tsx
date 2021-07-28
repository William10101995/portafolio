import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { pageTransition, durationTransition } from "../scripts/frameMotion";
import "./Contact.css";
import { myData } from "../data/MyData";
import {
  RiWhatsappFill,
  RiMapPinUserFill,
  RiMailSendFill,
} from "react-icons/ri";

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
        <div className="contenedorsinnavcontact">
          <h1>
            Contact <span className="estilome">Me</span>
          </h1>
          <div className="contenedorcontact">
            <div className="formulario">
              <form action="">
                <p>
                  <label htmlFor="fullname">FullName</label>
                  <input
                    type="text"
                    name="fullname"
                    placeholder="Jean Doe"
                    id="fullname"
                  />
                </p>
                <p>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jeandoe@example.com"
                    id="email"
                  />
                </p>
                <p>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+54 9 362-4111265"
                    id="phone"
                  />
                </p>
                <p>
                  <label htmlFor="affair">Affair</label>
                  <input
                    type="text"
                    name="affair"
                    placeholder="Backend Work"
                    id="affair"
                  />
                </p>
                <p className="block">
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    placeholder="I want a API REST"
                    id="message"
                  ></textarea>
                </p>
                <p className="block">
                  <button type="submit" className="btn-contact">
                    Send
                  </button>
                </p>
              </form>
            </div>
            <div className="info">
              <h3>More Info</h3>
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
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolore, neque.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
