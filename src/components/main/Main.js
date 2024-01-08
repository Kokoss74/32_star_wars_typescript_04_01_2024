import React from "react";
import Hero from "./Hero";
import DreamTeam from "../DreamTeam";
import FarGalaxy from "./FarGalaxy";
import AboutUs from "../../pages/AboutUs";
import StarWars from "../../pages/StarWars";
import Contact from "../../pages/Contact";
import { navItems } from "../../utils";
import Home from "../../pages/Home";

const Main = ({ currentPage }) => {
  switch (currentPage) {
    case navItems[1]:
      return (
        <AboutUs />
    )
    case navItems[2]:
      return (
        <StarWars />
    )
    case navItems[3]:
      return (
        <Contact />
    )
    default:
      return <Home />
  }

};

export default Main;
