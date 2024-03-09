import React, { useContext } from 'react';
import './DropDown.css';
import { NavLink } from 'react-router-dom';
import Context from '../../Context/Context.jsx';
import Logo from '../../assets/Logo.png';

function DropDown(props) {
  const ctx = useContext(Context);

  return (
    <div>
      <div
        className="tsBG"
        onClick={() => {
          ctx.setIsDropVal(false);
        }}
      ></div>
      <div className="dropdown">
        <NavLink to="/" style={{ marginTop: '15px' }}>
          <img
            src={Logo}
            alt="header"
            className="img"
            onClick={() => {
              ctx.setIsDropVal(false);
            }}
          />
        </NavLink>
      </div>
    </div>
  );
}

export default DropDown;
