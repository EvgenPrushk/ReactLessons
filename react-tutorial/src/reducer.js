import { DECREMENT, INCREMENT } from "./boilerplate";

export default function reducer(state, action) {
  switch (action.type) {
    case DECREMENT:
      return {
        counter: state.counter - action.payload,
      };

    case INCREMENT:
      return {
        counter: state.counter + action.payload,
      };
  }
}
