import React from "react";
import ReactDOM, { render } from "react-dom";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.intervalFlag = null;

    this.state = {
      title: "Текущее время",
      date: new Date(),
      counter: 0,
    };
    // происходит слияние объектов, только тех полей, которые мы переопределили
  }
  // что происходит с компонентом после монтирования
  componentDidMount() {
    this.intervalFlag = setInterval(() => {
      this.setState((state, props) => ({
        date: new Date(),
        counter: state.counter + 1,
      }));
    }, 1000);
  }
  // что происходит между обнавлениями
  componentDidUpdate() {}
  // что происходит с компонентом после исполнения
  componentWillUnmount() {
    clearInterval(this.intervalFlag);
  }

  render() {
    return (
      <div>
        <p>{this.state.title}</p>
        <p>{this.state.counter}</p>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

ReactDOM.render(<Clock />, document.querySelector("#root"));

// function Clock() {
//   //
//   const [state, setState] = useState({
//     date: new Date(),
//   });

//   setInterval(() => setState({
//     date: new Date(),
//   }));

//   return <p>{state.date.toLocaleTimeString()}</p>;
// }

// ReactDOM.render(<Clock />, document.querySelector("#root"));

//компанент ввиде функции
// входные параметры props нельзя изменять
// использовать лучше функциональные компоненты
// function Welcom(props) {
//   return <p> Hello {props.user.name} {props.user.surname} </p>;
// }

// class Welcom extends React.Component {
//   render() {
//     return <p> Hello {this.props.user.name} {this.props.user.surname}! </p>;
//   }
// }

// function App(props) {
//   const users = [
//     {name: "Maks", surname: "Natti"},
//     {name: "Sergei", surname: "Tatti"},
//     {name: "Tamara", surname: "Matti"},
//     {name: "Olga", surname: "Ostrovskaia"},
//   ]
//   return (
//     <div>
//       <Welcom user={users[0]} />
//       <Welcom user={users[1]} />
//       <Welcom user={users[2]} />
//       <Welcom user={users[3]} />
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.querySelector("#root"));

//  const elemet = <Welcom userName="Alex" />;

// function tick() {
//   const element = (
//     <div>
//       <h1> Hello world</h1>
//       <h2>It is {new Date().toLocaleTimeString()} </h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);

// const ul1 = (
//   <ul>
//     <li>Яблоко</li>
//     <li>Банан</li>
//     <li>Апельсин</li>
//   </ul>
// )
// const ul2 = (
//   <ul>
//     <li>Яблоко</li>
//     <li>Банан</li>
//     <li>Виноград</li>
//   </ul>
// )

// ReactDOM.render(ul1, document.querySelector("#root"));
// setTimeout(() => {
//   ReactDOM.render(ul2, document.querySelector("#root"));
// }, 2000);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

reportWebVitals();
