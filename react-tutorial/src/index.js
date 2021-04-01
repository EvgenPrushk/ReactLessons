import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
function tick() {
  const element = (
    <div>
      <h1> Hello world</h1>
      <h2>It is {new Date().toLocaleTimeString()} </h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);

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
