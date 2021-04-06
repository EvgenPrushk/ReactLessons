import React from "react";
import { useState } from "react";

export default function City(props) {

    const [cities, setCities] = useState([
        { name: "Moscow", describtion: "Столица России" },
    
        { name: "Zelenograd", describtion: "Научный спутник москвы" },
      ]);
    
      const city = cities[0];
      const handlerChange = (e) => {
          setCities(cityes.map((city, index) =>{
              if (condition) {
                  
              }
          }))
      }
      return (
        <ul>
          {cities.map((city) => (
            <li key={city.name}>{city.name}</li>
          ))}
        </ul>
      );
}