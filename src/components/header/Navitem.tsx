import React, { useContext } from "react";
import { IChange } from "../../utils/constants";
import { Link } from "react-router-dom";
import { AppContext } from "../../utils/context";
import { Item } from "../../utils/types";

// interface NavItemProps {
//   changePage: IChange,
//   title: string
// }

// вариант ниже аналогичен вышеуказанному
// interface NavItemProps extends IChange {
//   title: string
// }

const Navitem: React.FC<{ item: Item }> = ({ item }) => {

  const { hero } = useContext(AppContext);

  return (
    <li>
      <Link
        className="nav-item btn btn-danger mx-1 border-warning border-3"
        to={`/${item.route}/${hero}`}
      >
        {item.title}
      </Link>
    </li>
  )
};

export default Navitem;
