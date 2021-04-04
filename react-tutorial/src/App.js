import React from "react";
// import { useState } from "react";
import Button from "./Button";

function App(props) {
  const handlerThirdClick = () => {
    console.log("3-й клик выполнен");
  };
  const handlerClick = () => {
    console.log("handlerClick fired");
  };
  const handlerMouseEnter = () => {
    console.log("onMouseEnter called");
  };
  return (
    <Button
      onThirdClick={handlerThirdClick}
      onClick={handlerClick}
      onMouseEnter={handlerMouseEnter}
    >
      Новый текст для кнопки
    </Button>
  );
}

export default App;
