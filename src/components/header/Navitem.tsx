import React from "react";
import { IChange } from "../../utils";

// interface NavItemProps {
//   changePage: IChange,
//   title: string
// }

// вариант ниже аналогичен вышеуказанному
interface NavItemProps extends IChange {
  title: string
}

const Navitem: React.FC<NavItemProps> = ({ title, changePage }) => {
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
