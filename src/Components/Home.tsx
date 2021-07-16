import React from "react";
import { Navbar } from "./Navbar";
import Particles from "react-tsparticles";
import {particlesConfig} from "../scripts/particles";

export const Home = () => {
  
  return (
    <div>
      <Navbar />
      <Particles height="100vh" width="100vw" options={particlesConfig} />
      <h1>Bienvenido al Home</h1>
    </div>
  );
};
