import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Home } from "./Components/Home";
import { Projects } from "./Components/Projects";
import "./main.css";
import { AnimatePresence, motion } from "framer-motion";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
