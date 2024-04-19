import Context from './Context.jsx';
import { useState } from 'react';

function ContextProvider(props) {
  const [isDrop, setIsDrop] = useState(false);
  const [contactCard, setContactCard] = useState(false);
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

  const toggleContactCard = (val) => {
    setContactCard(val);
  };

  return (
    <Context.Provider
      value={{
        isDrop,
        modal,
        animateCart,
        contactCard,
        setIsDropVal,
        setModalVal,
        setAnimateCart: toggleCartIconAnimate,
        setContactCard: toggleContactCard,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider;
