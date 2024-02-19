import React, { useContext } from "react";
import Friend from "./Friend";
import { friends } from "../../utils/constants";
import { AppContext, DreamTeamContext } from "../../utils/context";

const DreamTeam = () => {
  const { hero } = useContext(AppContext);

  return (
    <section className="float-end w-50 mx-1 border-warning border border-3 rounded-bottom-2 row">
      <h2 className="col-12 text-center ">Dream Team</h2>
      {friends.filter(f => f !== hero).map((item, index) => (
        // <DreamTeamContext.Provider value={{ photoContext: item, numberContext: index + 1}}>
          <Friend key={index} hero={item} number={index + 1} />
        // </DreamTeamContext.Provider>
      ))}

      {/* <img src={friends[0]} alt="friend1" />
      <img src={friends[1]} alt="friend2" />
      <img src={friends[2]} alt="friend3" />
      <img src={friends[3]} alt="friend4" />
      <img src={friends[4]} alt="friend5" />
      <img src={friends[5]} alt="friend6" />
      <img className="bottomLeft" src={friends[6]} alt="friend7" />
      <img src={friends[7]} alt="friend8" />
      <img className="bottomRight" src={friends[8]} alt="friend9" /> */}
    </section>
  );
};

export default DreamTeam;
