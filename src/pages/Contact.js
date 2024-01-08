import React, { useEffect, useState } from "react";
import { BASE_URL, month } from "../utils";
// import Planet from "../components/main/Planet"; // использовал в домашке

const Contact = () => {
  const [planets, setPlanets] = useState([]);

  const fetchPlanets = async () => {
    const response = await fetch(`${BASE_URL}/v1/planets`);
    const data = await response.json();
    const planets = data.map((planet) => planet.name); // ! так проще
    // const planets = Array.from(data, (elem) => elem.name); // так сделал в домашке
    setPlanets(planets);

    const info = {
      payload: planets,
      time: Date.now(),
    };

    localStorage.setItem("planets", JSON.stringify(info));
  };

  useEffect(() => {
    const planets = JSON.parse(localStorage.getItem('planets'));
    planets && (Date.now() - planets.time < month) ? 
      setPlanets(planets.payload) : 
      fetchPlanets();
      console.log(JSON.parse(localStorage.getItem('planets')));
  }, []);

  return (
    <form className="d-flex flex-column" onSubmit={(e) => e.preventDefault()}>
      <label>First Name:
        <input type="text" name="firstName" placeholder="Your name..." />
      </label>
      <label>Planet:
        <select name="planet">
          {planets.map((planetName, index) => (
            <option key={index} value={planetName}>
              {planetName}
            </option>
          ))}
        </select>
      </label>
      <label>Subject:
        <textarea placeholder="Write Something..." />
      </label>
      <button className="w-25" type="submit">Send form</button>
    </form>
    // так сделал в домашке
    // <main>
    //   <h2>Contact the Jedi Council</h2>

    //   <h5 className="my-3">
    //     If you are on the Light Side of the Force, fill out the form
    //   </h5>

    //   <select
    //     className="form-select"
    //     style={{ backgroundColor: "lightgray" }}
    //     aria-label="Default select example"
    //   >
    //     <option defaultValue>choose your planet</option>
    //     {planet.map((e, index) => (
    //       <Planet key={index + e} value={e} />
    //     ))}
    //   </select>

    //   <div className="form-floating mt-2">
    //     <textarea
    //       className="form-control"
    //       placeholder="Enter your name"
    //       id="floatingTextarea"
    //       style={{ backgroundColor: "lightgray" }}
    //     ></textarea>
    //     <label htmlFor="floatingTextarea">your name</label>
    //   </div>

    //   <div className="input-group flex-nowrap mt-2">
    //     <span className="input-group-text" id="addon-wrapping">
    //       מספר
    //     </span>
    //     <input
    //       type="number"
    //       className="form-control"
    //       min={0}
    //       style={{ backgroundColor: "lightgray" }}
    //       placeholder="smartphone"
    //       aria-label="smartphone"
    //       aria-describedby="addon-wrapping"
    //     />
    //   </div>

    //   <div className="form-floating mt-2">
    //     <input
    //       type="email"
    //       className="form-control"
    //       id="floatingInput"
    //       placeholder="name@example.sw"
    //       style={{ backgroundColor: "lightgray" }}
    //     />
    //     <label htmlFor="floatingInput">email address</label>
    //   </div>

    //   <div className="form-floating mt-2">
    //     <textarea
    //       className="form-control"
    //       placeholder="Leave a comment here"
    //       id="floatingTextarea2"
    //       style={{ height: 150, backgroundColor: "lightgray" }}
    //     ></textarea>
    //     <label htmlFor="floatingTextarea2">text here</label>
    //   </div>

    //   <div className="d-grid gap-2 mt-2 mb-4">
    //     <button className="btn btn-warning" type="button">
    //       May the Force be with you
    //     </button>
    //   </div>
    // </main>
  );
};

export default Contact;
