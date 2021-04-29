import React, { useState } from "react";

// import Content from "./Content";
// import RecfunursiveButton from "./RecursiveButton";
// import CityesList from "./CitiesList";
// import City from "./City";

function App() {
  const [counter, setCounter] = useState(0);

  const handlerClick = () => {
    // doing synx 0 + 1
    setCounter((x, props) => x + 1);
    //  and doing asynx 0 + 1
    setCounter((x, props) => x + 1);
  };

  return <button onClick={handlerClick}> На меня нажали {counter} раз</button>;
}

// function App() {
//   const [state, setState] = useState({
//     counter: 0,
//     user: {
//       name: "Maks",
//       surename: "Petrov",
//     },
//   });

//   const handlerClick = (e) => {
//     setState({
//       // *important!!! preservation of structure
//       ...state,
//       counter: state.counter + 1,
//     });
//   };
//   console.log(state);
//   return (
//     <button onClick={handlerClick}> На меня нажали {state.counter}</button>
//   );
// }

// function App() {
//   const [counters, setCounters] = useState([0, 0, 0]);

//   // const count = (n) => {
//   //   setCounters(
//   //     counters.map((v, i) => {
//   //       if (n === i) {
//   //         return v + 1;
//   //       }

//   //       return v;
//   //     })
//   //   );
//   // };
//   //
//   const count = (n) => setCounters(counters.map((x, i) => x + (i === n)));

//   //change State setCounter next setCounter(1) next setCounter(2)  === Reactivity
//   return (
//     <ul>
//       {[0, 1, 2].map((v) => (
//         <li key={v}>
//           <button onClick={() => count(v)}>
//             На меня нажали {counters[v]} раз
//           </button>

//         </li>
//       ))}
//     </ul>
//   );
// }

// export default App;

// function App() {
//   const [cities, setCities] = useState([
//     { name: "Moscow", description: "Столица России" },
//     { name: "Zelenograd", description: "Научный спутник москвы" },
//   ]);

//   // the index of the city we want to display
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlerChangeCity = (n, description) => {
//     setCities(
//       cities.map((city, index) => {
//         if (index === n) {
//           return {
//             ...city,
//             description,
//           };
//         }
//         return city;
//       })
//     );
//   };

//   const handlerSelectCity = (n) => setCurrentIndex(n)

//   return (
//     <div>
//       <City
//         cities={cities}
//         onChangeCity={handlerChangeCity}
//         currentIndex={currentIndex}
//       />
//       <CityesList cities={cities} onSelectCity ={handlerSelectCity}/>
//     </div>
//   );
// }

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
