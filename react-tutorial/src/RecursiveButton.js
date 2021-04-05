// import React from "react";
import { useState } from "react";

export default function RecursiveButton(props) {
  const [showMode, setshowMode] = useState(false);
  return (
    <>
      <button onClick={() => setshowMode(!showMode)}>
        Покажи/скрой следующий шаг
      </button>
      <br />

      {showMode ? <RecursiveButton /> : null}
    </>
  );
}
