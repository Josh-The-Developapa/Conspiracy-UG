import { createContext } from 'react';

const Context = createContext({
  isDrop: false,
  modal: false,
  setModalVal: () => {},
  setIsDropVal: () => {},
  animateCart: false,
  setAnimateCart: () => {},
});

export default Context;
