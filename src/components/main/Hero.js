import React from "react";
import mainFoto from "../../images/main.jpg";

// rafce - React Arrow Function Component Export
// rce - React Class Export Component

const Hero = () => {
  return (
    <section className="float-start me-3 w-25">
      <img className="w-100" src={mainFoto} alt="Luke Skywalker" />
    </section>
  );
};

export default Hero;
