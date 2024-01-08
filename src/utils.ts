import friend1Foto from "./images/friend1.jpg";
import friend2Foto from "./images/friend2.jpg";
import friend3Foto from "./images/friend3.jpg";
import friend4Foto from "./images/friend4.jpg";
import friend5Foto from "./images/friend5.jpg";
import friend6Foto from "./images/friend6.jpg";
import friend7Foto from "./images/friend7.jpg";
import friend8Foto from "./images/friend8.jpg";
import friend9Foto from "./images/friend9.jpg";

export const friendsFoto = [
  friend1Foto,
  friend2Foto,
  friend3Foto,
  friend4Foto,
  friend5Foto,
  friend6Foto,
  friend7Foto,
  friend8Foto,
  friend9Foto,
];

export const navItems = ["Home", "About us", "Star Wars", "Contact"];

export const BASE_URL = 'https://sw-info-api.herokuapp.com';

export const month = 30 * 24 * 60 * 60 * 1000;

export type Change = (page: string) => void; // типизация простой сущности, в данном случае функции

export interface IChange {changePage: Change };