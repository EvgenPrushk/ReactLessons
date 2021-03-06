import { useState } from "react";

export default function Button(props) {
  const [counter, setCounter] = useState(0);

  if (counter === 3) {
    // вызываем событие через props
    props.onThirdClick();
  }
  const handlerClick = (event) => {
    setCounter(counter + 1);
    if (props.onClick) {
      props.onClick(event);
    }
  };

 
  return (
    <button {...props} onClick={handlerClick} >
      {props.children}
    </button>
  );
}
