import React from "react";
import Navitem from "./Navitem";
import { IChange, navItems } from "../../utils/constants";

const Navigation = () => {
  return (
    <nav className="fixed-top mt-2 ms-4 ">
      <ul className="nav">
        {navItems.map((item, index) => (
          <Navitem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
