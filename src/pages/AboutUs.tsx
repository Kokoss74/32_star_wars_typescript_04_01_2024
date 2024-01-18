import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils";

interface IHero {
  name: string,
  gender: string,
  skin_color: string,
  hair_color: string,
  height: string,
  eye_color: string,
  mass: string,
  birth_year: string,
  image: string
}

const AboutUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hero, setHero] = useState<undefined | IHero>(undefined);

  useEffect(() => {
    console.log("Component AboutUs mounted");
    const hero1 = JSON.parse(localStorage.getItem("hero")!);

    if (hero1) {
      setIsLoading(false);
      setHero(hero1.payLoad);
    } else {
      fetch(`${BASE_URL}/v1/peoples/1`)
        .then((response) => response.json())
        .then((data) => {
          setHero(data);
          const info = {
            payLoad: data,
            time: Date.now(),
          };
          localStorage.setItem("hero", JSON.stringify(info));
          setIsLoading(false);
        });
    }
    return () => console.log("Component AboutUs unmounted");
  }, []);

  return isLoading ? (
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  ) : (
    <div>
      {hero &&
        <>
          <img src={`${BASE_URL}/${hero.image}`} alt={hero.name} />
          <p>birth year: {hero.birth_year}</p>
          <p>eye color: {hero.eye_color}</p>
          <p>gender: {hero.gender}</p>
          <p>hair color: {hero.hair_color}</p>
          <p>height: {hero.height}</p>
          <p>mass: {hero.mass}</p>
          <p>skin color: {hero.skin_color}</p>
        </>}
    </div>)
};

export default AboutUs;
