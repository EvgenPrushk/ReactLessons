import React from "react";
import { useState } from "react";

// import Content from "./Content";
// import RecursiveButton from "./RecursiveButton";
import CityesList from "./CitiesList";
import City from "./City";

function App() {
  const [cities, setCities] = useState([
    { name: "Moscow", description: "Столица России" },
    { name: "Zelenograd", description: "Научный спутник москвы" },
  ]);

  // the index of the city we want to display
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlerChangeCity = (n, description) => {
    setCities(
      cities.map((city, index) => {
        if (index === n) {
          return {
            ...city,
            description,
          };
        }
        return city;
      })
    );
  };

  const handlerSelectCity = (n) => setCurrentIndex(n)

  

  return (
    <div>
      <City
        cities={cities}
        onChangeCity={handlerChangeCity}
        currentIndex={currentIndex}
      />
      <CityesList cities={cities} onSelectCity ={handlerSelectCity}/>
    </div>
  );
}

// function App(props) {
//   const [value, setValue] = useState("Яблоко");
//   const handlerChange = (e) => {
//     setValue(e.target.value);
//     console.log(e.target.value);
//   };
//   return (
//     <select value={value} onChange={handlerChange}>
//       <option value="Яблоко">Яблоко</option>
//       <option value="Банан">Банан</option>
//       <option value="Кокос">Кокос</option>
//       <option value="Виноград">Виноград</option>
//       <option value="Слива">Слива</option>
//     </select>
//   );
// }

// function App(props) {
//   const [checked, setChecked] = useState(false);

//   const item = ["Яблоко", "Банан", "Кокос", "Виноград", "Слива"];
//   return (
//     <ul>
//       {item.map((item) => (
//         <li key={item}>
//           <label>
//             <input
//               type="radio"
//               checked={checked === item}
//               onChange={() => setChecked(item)}
//             />
//             {item}
//           </label>
//         </li>
//       ))}
//     </ul>
//   );
// }
// 09-31
// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       value: "AText",
//     };
//   }
//   hadlerChange(event) {
//     this.setState({
//       value: event.target.event,
//     });
//   }
//   render() {
//     return (
//       <div>
//         {this.state.value}
//         <br />
//         <input
//           value={this.state.value}
//           onChange={(e) => this.hadlerChange(e)}
//         />
//       </div>
//     );
//   }
// }
export default App;
