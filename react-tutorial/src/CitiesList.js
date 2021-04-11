import React from "react";

import { useState } from "react";

export default function CitiesList(props) {
  const [cities, setCities] = useState([
    { name: "Moscow", describtion: "Столица России" },

    { name: "Zelenograd", describtion: "Научный спутник москвы" },
  ]);

  return <ul>
    {cities.map((city) => (<li key={city.name}>{city.name}</li>))}
  </ul>
}
