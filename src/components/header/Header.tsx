import React, { useContext } from "react";
import Navigation from "./Navigation";
import { IChange, characters } from "../../utils/constants";
import { AppContext } from "../../utils/context";

const Header = () => {
  const { hero } = useContext(AppContext);

  return (
    <header>
      <Navigation />
      <h1 className="text-center py-4">{characters[hero].name}</h1>
    </header>
  );
};

export default Header;
