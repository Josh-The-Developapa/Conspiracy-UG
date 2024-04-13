import React, { useContext } from 'react';
import './DropDown.css';
import { NavLink } from 'react-router-dom';
import Context from '../../Context/Context.jsx';

function DropDown(props) {
  const ctx = useContext(Context);
  const year = new Date(Date.now()).getFullYear();

  return (
    <div>
      <div
        className="tsBG"
        onClick={() => {
          ctx.setIsDropVal(false);
        }}
      ></div>
      <div className="dropdown">
        <h2
          style={{ marginLeft: '10px', fontSize: '26px' }}
          className="footer-heading"
        >
          Conspiracy UG
        </h2>
        <p
          style={{ maxWidth: '150px', textAlign: 'center', marginTop: '-10px' }}
        >
          Uncover the truth wear Conspiracy
        </p>
        <NavLink
          to="/"
          style={{ marginTop: '40px' }}
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
            textAlign: 'center',
          }}
          onClick={() => {
            ctx.setIsDropVal(false);
            ctx.setModalVal(true);
          }}
        >
          Cart
        </button>
        <h4 style={{ position: 'absolute', bottom: 0 }}>
          &copy; Conspiracy UG. <br />
          All rights reserved
        </h4>
      </div>
    </div>
  );
}

export default DropDown;
