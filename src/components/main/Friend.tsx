import React, { useContext } from "react";
import style from '../../css-modules/borderRound.module.css';
import { AppContext } from "../../utils/context";
import { characters, navItems } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

interface IFriendProps {
  hero: string,
  number: number
}

const Friend: React.FC<IFriendProps> = ({ hero, number }) => {

  const navigate = useNavigate(); // происходит переход по переданному адресу

  let friendStyle = 'col-4 p-1 '; // пробел в конце!
  // const { changeHero } = useContext(AppContext);

  if (number === 7) friendStyle += style.bottomLeft;
  if (number === 9) friendStyle += style.bottomRight;

  return (
    <img
      onClick={() => navigate(`/${navItems[0].route}/${hero}`)}
      className={friendStyle}
      src={characters[hero].img}
      alt={characters[hero].name}
    />
    //  <img className={`first second ${number === 7 ? 'bottomLeft' : ''}${number === 9 ? 'bottomRight' : ''}`} src={photo} alt={`friend${number}`} />
  )
};

export default Friend;
