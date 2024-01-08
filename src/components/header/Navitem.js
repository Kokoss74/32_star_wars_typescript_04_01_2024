import React from "react";

const Navitem = ({ title, changePage }) => {
  return (
    <li 
      className="nav-item btn btn-danger mx-1 border-warning border-3"
      onClick={() => changePage(title)}
    >
      {title}
    </li>
  )
};

export default Navitem;
