import React from "react";
import Navitem from "./Navitem";
import { navItems } from "../../utils";

const Navigation = ({ changePage }) => {
  return (
    <nav className="fixed-top mt-2 ms-4 ">
      <ul className="nav">
        {navItems.map((e) => (
          <Navitem key={e} title={e} changePage={changePage} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
