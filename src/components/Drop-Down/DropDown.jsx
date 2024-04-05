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
        <h2 style={{ marginLeft: '10px', marginRight: '10px' }}>
          Conspiracy UG
        </h2>
        <NavLink
          to="/"
          style={{ marginTop: '15px' }}
          className="NavLinkDropDown"
          onClick={() => {
            ctx.setIsDropVal(false);
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          style={{ marginTop: '15px' }}
          className="NavLinkDropDown"
          onClick={() => {
            ctx.setIsDropVal(false);
          }}
        >
          About
        </NavLink>
        {/* <button
          style={{
            color: 'white',
            border: '1px solid white',
            marginTop: '20px',
          }}
        >
          Login
        </button> */}
        <button
          style={{
            color: 'white',
            border: '1px solid white',
            marginTop: '20px',
          }}
          onClick={() => {
            ctx.setIsDropVal(false);
            ctx.setModalVal(true);
          }}
        >
          My Cart
        </button>
        <h4 style={{ marginTop: '300px' }}>
          &copy; Conspiracy UG. <br />
          All rights reserved
        </h4>
      </div>
    </div>
  );
}

export default DropDown;
