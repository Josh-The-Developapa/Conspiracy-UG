import { createContext } from 'react';

const Context = createContext({
  isDrop: false,
  modal: false,
  setModalVal: () => {},
  setIsDropVal: () => {},
});

export default Context;
