import React from "react";
import { useState } from "react";



export default function City(props) {
  const [cities, setCities] = useState([
    { name: "Moscow", describtion: "Столица России" },

    { name: "Zelenograd", describtion: "Научный спутник москвы" },
  ]);

  const city = cities[0]
  const handlerChange = 
  return <div>
      <h3>{city.name}</h3>
      <textarea value={city.describtion} onChange ={handlerChange} />
  </div>
}
