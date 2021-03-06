import reducer from "./reducer";
import { useReducer } from "react";
import { increase, decrease } from "./actions";


export default function useSmartCounter(n = 0) {
  const [state, dispatch] = useReducer(reducer, {
    counter: n,
  });

  return {
    counter: state.counter,
    add1: () => dispatch(increase(1)),
    add5: () => dispatch(increase(5)),
    remove1: () => dispatch(decrease(5)),
    remove5: () => dispatch(decrease(5)),
  };
}
