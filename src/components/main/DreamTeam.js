import React from "react";
import Friend from "./main/Friend";
import { friendsFoto } from "../utils";

const DreamTeam = () => {
  return (
    <section className="float-end w-50 mx-1 border-warning border border-3 rounded-bottom-2 row">
      <h2 className="col-12 text-center ">Dream Team</h2>
      {friendsFoto.map((item, index) => <Friend key={index} photo={item} number={index + 1}/>)}

      {/* <img src={friendsFoto[0]} alt="friend1" />
      <img src={friendsFoto[1]} alt="friend2" />
      <img src={friendsFoto[2]} alt="friend3" />
      <img src={friendsFoto[3]} alt="friend4" />
      <img src={friendsFoto[4]} alt="friend5" />
      <img src={friendsFoto[5]} alt="friend6" />
      <img className="bottomLeft" src={friendsFoto[6]} alt="friend7" />
      <img src={friendsFoto[7]} alt="friend8" />
      <img className="bottomRight" src={friendsFoto[8]} alt="friend9" /> */}
    </section>
  );
};

export default DreamTeam;
