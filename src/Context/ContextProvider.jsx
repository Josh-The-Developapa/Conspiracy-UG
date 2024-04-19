import Context from './Context.jsx';
import { useState } from 'react';

function ContextProvider(props) {
  const [isDrop, setIsDrop] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateCart, setAnimateCart] = useState(false);

  function setIsDropVal(val) {
    setIsDrop(val);
  }

  function setModalVal(val) {
    setModal(val);
  }

  const toggleCartIconAnimate = () => {
    setAnimateCart((prev) => !prev);
  };

  return (
    <Context.Provider
      value={{
        isDrop,
        modal,
        setIsDropVal,
        setModalVal,
        animateCart,
        setAnimateCart: toggleCartIconAnimate,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider;
