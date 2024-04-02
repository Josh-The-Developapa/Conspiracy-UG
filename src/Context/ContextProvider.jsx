import Context from './Context.jsx';
import { useState } from 'react';

function ContextProvider(props) {
  const [isDrop, setIsDrop] = useState(false);
  const [modal, setModal] = useState(false);

  function setIsDropVal(val) {
    setIsDrop(val);
  }

  function setModalVal(val) {
    setModal(val);
  }

  return (
    <Context.Provider
      value={{
        isDrop,
        modal,
        setIsDropVal,
        setModalVal,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export default ContextProvider;
