import React, { useState } from "react";

function Example1() {
  const [car, setCar] = useState({
    brand: "BMW",
    model: "BMW X5",
    year: "2023",
    color: "red",
  });

  const updateColor = () => {
    setCar((previousState) => {
      console.log(previousState);
      return { ...previousState, color: "pink" };
    });
  };

  return (
    <div>
      <h1>{car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
      <button onClick={updateColor}>Change Color</button>
      <Car model={car.model} />
    </div>
  );
}

function Car({ brand, model, year }) {
  return (
    <div>
      <p>I am a {model}</p>
    </div>
  );
}

export default Example1;

//dot notation
// car = {
//     brand: "BMW",
//     model: "BMW X5",
//     yea: "2023",
//     color: "red",
//   }
