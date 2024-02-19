export interface Hero {
    name: string,
    img: string,
    url: string
}

export interface Characters {
    [key: string]: Hero
}

export interface Item {
    title: string,
    route: string
}

export interface IHero {
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

export interface ITransport {
    name: string,
    cargo_capacity: string,
    passengers: string,
    crew: string,
    model: string,
    cost_in_credits: string,
    manufacturer: string,
}