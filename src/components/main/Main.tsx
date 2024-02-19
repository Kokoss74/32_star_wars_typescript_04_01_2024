import React, { useContext } from "react";
import Hero from "./Hero";
import DreamTeam from "../main/DreamTeam";
import FarGalaxy from "./FarGalaxy";
import AboutUs from "../../pages/AboutUs";
import StarWars from "../../pages/StarWars";
import Contact from "../../pages/Contact";
import { navItems } from "../../utils/constants";
import Home from "../../pages/Home";
import { Route, Routes } from "react-router-dom";

const Main: React.FC = (): JSX.Element => {
  return (
    <Routes>
      {
        [`/`, `/${navItems[0].route}`, `/${navItems[0].route}/:heroId`]
          .map(p => <Route key={p} path={p} element={<Home />} />)
      }
      {
        [`/${navItems[1].route}`, `/${navItems[1].route}/:heroId`]
        .map(p => <Route key={p} path={p} element={<AboutUs />} />)
      }
      <Route path={`/${navItems[2].route}/:heroId`} element={<StarWars />} />
      <Route path={`/${navItems[3].route}/:heroId`} element={<Contact />} />
      {/* <Route path="*" element={<ErrorPage />}/> */}
    </Routes>
  )

  // const { currentPageContext } = useContext(AppContext);

  // switch (currentPageContext) {
  //   case navItems[0]:
  //     return <Routes><Route path="/" element={<Home />} /></Routes>
  //   case navItems[1]:
  //     return <Routes><Route path="/About us" element={<AboutUs />} /></Routes>
  //   case navItems[2]:
  //     return <Routes><Route path="/Star wars" element={<StarWars />} /></Routes>
  //   case navItems[3]:
  //     return <Routes><Route path="/Contact" element={<Contact />} /></Routes>
  //   default:
  //     return <>ERROR</>
  // }
};

export default Main;
