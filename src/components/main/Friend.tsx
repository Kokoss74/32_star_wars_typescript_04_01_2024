import React from "react";
import style from '../../css-modules/borderRound.module.css';

interface IFriendProps {
  photo: string,
  number: number
}

const Friend:React.FC<IFriendProps> = ({ photo, number }) => {
    let friendStyle = 'col-4 p-1 '; // пробел в конце!

    if (number === 7) friendStyle += style.bottomLeft;
    if (number === 9) friendStyle += style.bottomRight;

  return <img className={friendStyle} src={photo} alt={`friend${number}`} />;
  // <img className={`first second ${number === 7 ? 'bottomLeft' : ''}${number === 9 ? 'bottomRight' : ''}`} src={photo} alt={`friend${number}`} />
};

export default Friend;
