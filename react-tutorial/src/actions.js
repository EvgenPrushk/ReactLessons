import {INCREMENT, DECREMENT} from  './boilerplate'

// action generator
// const increment = (payload) => ({
//   type: INCREMENT,
//   payload,
// });
// // action generator
// const decrement = (payload) => ({
//   type: DECREMENT,
//   payload,
// });

export const increment = (payload) => {
  return { type: INCREMENT, payload };
};

export const decrement = (payload) => {
  return { type: DECREMENT, payload };
};
