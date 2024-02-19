import React, { useEffect, useState } from "react";
import { BASE_URL, characters, lukeDefault, month, navItems } from "../utils/constants";
import { withHeroId } from "../components/hoc/withHeroId";
import { IHero, ITransport } from "../utils/types";

const AboutUs = ({ heroId }: { heroId: string }) => {
  const [hero, setHero] = useState<undefined | IHero & ITransport>(undefined);
  // & - объединяет два интерфейса в один

  useEffect(() => {
    console.log("Component AboutUs mounted");
    const hero1 = JSON.parse(localStorage.getItem(heroId)!);

    if (hero1 && (Date.now() - hero1.time) < month) {
      setHero(hero1.payload);
    } else {
      fetch(characters[heroId].url)
        .then((response) => response.json())
        .then((data) => {
          setHero(data);
          const info = {
            payload: data,
            time: Date.now(),
          };
          localStorage.setItem(heroId, JSON.stringify(info));
        })
        .catch(() => {
          setHero(lukeDefault);
          localStorage.setItem('luke', JSON.stringify({
            payload: lukeDefault,
            time: Date.now(),
          }));

        }) 
    }
    return () => console.log("Component AboutUs unmounted");
  }, []);

  return !hero ? (
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  ) : hero.gender ?
    (
      <div>
        <img src={`${BASE_URL}/${hero.image}`} alt={hero.name} />
        <p>birth year: {hero.birth_year}</p>
        <p>eye color: {hero.eye_color}</p>
        <p>gender: {hero.gender}</p>
        <p>hair color: {hero.hair_color}</p>
        <p>height: {hero.height}</p>
        <p>mass: {hero.mass}</p>
        <p>skin color: {hero.skin_color}</p>
      </div>
    ) :
    (
      <div>
        <img src={`${BASE_URL}/${hero.image}`} alt={hero.name} />
        <p>cargo_capacity: {hero.cargo_capacity}</p>
        <p>passengers: {hero.passengers}</p>
        <p>crew: {hero.crew}</p>
        <p>model: {hero.model}</p>
        <p>cost_in_credits: {hero.cost_in_credits}</p>
        <p>manufacturer: {hero.manufacturer}</p>
      </div>
    )

};

export default withHeroId(navItems[1].route)(AboutUs);
// функция withHeroId() принимает роут, а возвращает компонент AboutUs
