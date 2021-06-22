import React, { useCallback, useEffect, useRef } from "react";
// import useOne from "./useOne";
// import useCounter from "./useCounter";
// import { useReducer } from "react";
// import reducer from "./reducer";
// import { increment, decrement } from "./actions";
// import Mouse from "./Mouse";
// import Card from "./Card";
import UserCard from "./UserCard";

const users = [
  { id: 1, name: "Aleks", surname: "Dan" },
  { id: 2, name: "Mark", surname: "Brod" },
  { id: 3, name: "Sergei", surname: "Minko" },
  { id: 4, name: "Lena", surname: "Sappo" },
];

function App() {
  return (
    <div>
      <UserCard user={users[0]} onSendMessage={() => console.log(users[0])} />
      <UserCard user={users[1]} onSendInvite ={() => console.log(users[1])} />
      <UserCard user={users[2]} />
      <UserCard user={users[3]} />
    </div>
  );
}

// const ENTER = "Enter";
// function App() {
//   const refName = useRef();
//   const refSurname = useRef();
//   const refSend = useRef();

//   const userLog = useCallback(() => {
//     const user = {
//       name: refName.current.value,
//       surname: refSurname.current.value,
//     };
//     console.log(user);
//   }, [refName, refSurname]);

//   const keyupHandler = useCallback(
//     (event) => {
//       const { key } = event;
//       if (key !== ENTER) {
//         return;
//       }
//       // if null refNane  => focus
//       if (refName.current && !refName.current.value) {
//         return refName.current.focus();
//       }
//       if (refSurname.current && !refSurname.current.value) {
//         return refSurname.current.focus();
//       }

//       userLog();
//     },
//     [userLog, refName, refSurname]
//   );
//   // if keyup refName.current or refSurname.current use keyupHandler
//   useEffect(() => {
//     if (refName.current && refSurname.current && refSend.current) {
//       refName.current.addEventListener("keyup", keyupHandler);
//       refSurname.current.addEventListener("keyup", keyupHandler);
//       refSend.current.addEventListener("click", userLog);
//       return () => {
//         refName.current.removeEventListener("keyup", keyupHandler);
//         refSurname.current.rerefName.current.removeEventListener(
//           "keyup",
//           keyupHandler
//         );
//         refSend.current.removeEventListener("click", userLog);
//       };
//     }
//   }, [refName, refSurname, refSend, keyupHandler]);

//   return (
//     <div>
//       <input placeholder="name" ref={refName} />
//       <br />
//       <input placeholder="surname" ref={refSurname} />
//       <br />
//       <button ref={refSend}>Send</button>
//     </div>
//   );
// }

// const ENTER = "Enter";
// function App() {
//   const [user, setUser] = useState({
//     name: "",
//     surname: "",
//   });

//   const refName = useRef();
//   const refSurname = useRef();

//   const userLog = useCallback(() => {
//     console.log(user);
//   }, [user]);

//   const keyupHandler = useCallback(
//     (event) => {
//       const { key } = event;
//       if (key !== ENTER) {
//         return;
//       }
//       // if null refNane  => focus
//       if (refName.current && !refName.current.value) {
//         return refName.current.focus();
//       }
//       if (refSurname.current && !refSurname.current.value) {
//         return refSurname.current.focus();
//       }

//       userLog();
//     },
//     [userLog, refName, refSurname]
//   );

//   return (
//     <div>
//       <input
//         placeholder="name"
//         ref={refName}
//         value={user.name}
//         onChange={(e) => setUser((user) => ({ ...user, name: e.target.value }))}
//         onKeyUp={keyupHandler}
//       />
//       <br />
//       <input
//         placeholder="surname"
//         ref={refSurname}
//         value={user.surname}
//         onChange={(e) =>
//           setUser((user) => ({ ...user, surname: e.target.value }))
//         }
//         onKeyUp={keyupHandler}
//       />
//       <br />
//       <button onClick={userLog}>Send</button>
//     </div>
//   );
// }

// const ENTER = "Enter";
// function App() {
//   //   const [value, setValue] = useState("");
//   const ref = useRef();

//   const clickHandler = useCallback(() => {
//     console.log(ref.current.value);
//   }, [ref]);
//   // event for keyup
//   const keyupHandler = useCallback(
//     (e) => {
//       const { key } = e;
//       if (key === ENTER) {
//         clickHandler();
//       }
//     },
//     [clickHandler]
//   );
//   // add keyup event add remove keyup
//  useEffect(() => {
//     if (ref.current) {
//       ref.current.addEventListener("keyup", keyupHandler);
//       return () => {
//         ref.current.removeEventListener("keyup", keyupHandler);
//       };
//     }
//   }, [keyupHandler]);

//   return (
//     <div>
//       {/* <input value={value}  onChange={e=>setValue(e.target.value)}/> */}
//       <input ref={ref} />
//       <button onClick={clickHandler}> Отправить</button>
//     </div>
//   );
// }

// function App() {
//   return (
//     <>
//       <Mouse render={(data)=>{
//           return <p>{data.x}:{data.y}</p>
//       }} />
//     </>
//   );
// }

// import Content from "./Content";
// import RecfunursiveButton from "./RecursiveButton";
// import CityesList from "./CitiesList";
// import City from "./City";
// import ActionsCard from "./ActionsCard";
// import StatusCard from "./StatusCard";
// import Context from "./Context";
// import useSmartCounter from "./useSmartCounter";

// function App() {
//   const { counter, add1, add5, remove1, remove5 } = useSmartCounter();

//   return (
//     <div>
//       <button onClick={add1}>+1</button>
//       <br />
//       <button onClick={add5}>+5</button>
//       <br />
//       <p>{counter}</p>
//       <button onClick={remove1}>-1</button>
//       <br />
//       <button onClick={remove5}>-5</button>
//       <br />
//     </div>
//   );
// }

// function App() {
//   useOne(() => {
//     console.log("fired");
//   });

//   const {counter, count} = useCounter();
//   return (
//     <button onClick={count}>
//       На меня нажали {counter} раз
//     </button>
//   );
// }
// function App(props) {
//   const [name, SetName] = useState("");
//   const [surename, SetSurename] = useState("");

//   const surenameInputRef = useRef();
//   const nameInputRef = useRef();

//   const handlerKeyUp1 = (e) => {
//     if ((e.key === "Enter")) {
//       surenameInputRef.current.focus();
//     }
//   };
//   const handlerKeyUp2 = (e) => {
//     if ((e.key === "Enter")) {
//       nameInputRef.current.focus();
//     }
//   };
//   return (
//     <form>
//       <input
//         ref={nameInputRef}
//         type="text"
//         placeholder="FirstName"
//         value={name}
//         onChange={(e) => SetName(e.target.value)}
//         onKeyUp={handlerKeyUp1}
//       ></input>
//       <br />
//       <input
//         ref={surenameInputRef}
//         type="text"
//         placeholder="SecondName"
//         value={surename}
//         onChange={(e) => SetSurename(e.target.value)}
//         onKeyUp={handlerKeyUp2}
//       ></input>
//     </form>
//   );
// }
// function App() {
//   const [counter, setCounter] = useState(0);

//   const ref = useRef();

//   useEffect(() => {
//    ref.current = {
//      counter: 0,
//    }
//   }, []);

//   return (
//     <div>
//       <button onClick={() => ref.current.counter++}>
//       На меня нажали {counter} раз.
//     </button>
//     <br/>
//     <button onClick={() =>setCounter(ref.current.counter)}>
//       Обновить
//     </button>
//     </div>
//   );
// }

//action

// function App() {
//   const [counter, setCounter] = useState(0);
//   const count = (n) => setCounter(counter + n);

//   const value = {
//     counter,
//     count,
//   };

//   return (
//     //declare global context and "value' available on all children
//     <Context.Provider value={value}>
//       <div class="container">
//         <StatusCard />
//         <ActionsCard />
//       </div>
//     </Context.Provider>
//   );
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, {
//     counter: 1,
//   });

//   return (
//     <div>
//       <button onClick={() => dispatch(decrement(1))}>-1</button>
//       <button onClick={() => dispatch(decrement(2))}>-2</button>

//       <span>{state.counter}</span>
//       <button onClick={() => dispatch(increment(1))}>1</button>
//       <button onClick={() => dispatch(increment(2))}>2</button>
//     </div>
//   );
// }
// function App() {
//   const [massage, setMassage] = useState("massage");
//   const [counter, setCounter] = useState(0);
//   // при перерендеренге конпонента функция greating создается заново
//   // для сохранения ссылки используем useCallback
//   const greating = useCallback((text) => {
//     console.log(text);
//   }, []);

//   useEffect(() => {
//     greating(massage);
//   }, [greating, massage]);

//   return (
//     <button onClick={() => setCounter(counter + 1)}>
//       На меня нажали {counter} раз
//     </button>
//   );
// }

// function createUser(name, surename) {
//   const user = { name, surename };
//   console.log(user);
//   return user;
// }

// function App() {
//   const [name, setName] = useState("");
//   const [surename, setSurename] = useState("");
//   const [counter, setCounter] = useState(0);
//   // save Object using function
//   const user = useMemo(() => createUser(name, surename), [name, surename]);

//   return (
//     <div>
//       <button onClick={() => setCounter(counter + 1)}>
//         На меня нажали {counter} раз
//       </button>
//       <br />
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       ></input>
//       <br />
//       <input
//         type="text"
//         value={surename}
//         onChange={(e) => setSurename(e.target.value)}
//       ></input>
//       <br />
//       <pre>{JSON.stringify(user, null, 2)}</pre>
//     </div>
//   );
// }

// function App() {

//   const [timer, setTimer] = useState(0);
//   //useEffect  triggered immediately  after component creation
//   useEffect(() => {
//     const flagInterval = setInterval(() =>{
//       setTimer(timer + 1)
//       console.log('fired');
//     } , 1000)
//     //
//     return () => clearInterval(flagInterval)
//   })

//   //stop rendering and clenning
//   return <p id="target">{timer}</p>
// }

// function App() {
//   // useEffect(() =>{
//   //   console.log(document.querySelector('#target'));
//   // })
//   const [users, setUsers] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     fetch("./users?search=" + search)
//       .then((response) => response.json())
//       .then((users) => setUsers(users));
//   }, [search]);
//   return <p id="target">Hello</p>;
// }
// function App() {
//   const [counter, setCounter] = useState(0);

//   const handlerClick = () => {
//     // doing synx 0 + 1
//     setCounter((x, props) => x + 1);
//     //  and doing asynx 0 + 1
//     setCounter((x, props) => x + 1);
//   };

//   return <button onClick={handlerClick}> На меня нажали {counter} раз</button>;
// }

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
