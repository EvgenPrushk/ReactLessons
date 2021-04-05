import React from "react";
// import { useState } from "react";
// import { useState } from "react";
// import Content from "./Content";
// import RecursiveButton from "./RecursiveButton";

function App(props) {
  const users = [
    { id: 1, name: "ALex", surename: "Petrov" },
    { id: 2, name: "Maks", surename: "Grabov" },
    { id: 3, name: "Mihail", surename: "Nokov" },
    { id: 4, name: "Sergei", surename: "Matov" },
    { id: 5, name: "Maks", surename: "Bury" },
  ];

  const handlerMouseEnter = (user) => {
    console.log(`${user.name} ${user.surename}`);
  };
  // кей идет у того компонента, который идет в качестве элемента массива
  let lis = users.map((user, index) => {
    let style = {};
    const even = index % 2 === 0;
    if (even) {
      style = { color: "white", background: "black" };
    }
    return (
      <li key={user.id} style={style} onMouseEnter={() => handlerMouseEnter(user)}>
        {user.name} {user.surename}
      </li>
    );
  });
  return <ul>{lis}</ul>;
}

export default App;
