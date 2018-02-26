import { createStore } from 'redux'

export const counter = (state = 0, action) => {
  
  num = Number(action.num)+ 10

  switch (action.type) {
  case 'INCREMENT':
    return num
  case 'DECREMENT':
    return state - 1;
  case 'ADD':
    return state*20;
  case 'RESET':
    return 0;
  default:
    return state;
  }
}

let store = createStore(counter);

export default store;