import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import ShoppingBag from '../../assets/bag.png';
import Favs from '../../assets/heart.png';
import ProfilePic from '../../assets/user.png';

function Header() {
  return (
    <div className="header">
      <div
        style={{
          display: 'flex',
          //   backgroundColor: 'blue',
          marginRight: '50px',
          justifyContent: 'flex-start',
          paddingLeft: '15px',
        }}
      >
        <Link to="/">
          <h1 style={{ color: 'white', fontSize: '40px' }}>
            <i>Conspiracy UG</i>
          </h1>
        </Link>
      </div>
      {/* <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          //   width: '50%',
          backgroundColor: 'green',
          justifyContent: 'flex-end',
        }}
      > */}
      <Link
        to="/"
        style={{ color: 'white', fontWeight: 700, fontSize: '18px' }}
        className="NavLink"
      >
        <p>Home</p>
      </Link>
      <Link
        to="/"
        style={{
          color: 'white',
          fontWeight: 700,
          fontSize: '18px',
          marginLeft: '30px',
        }}
        className="NavLink"
      >
        <p>Products</p>
      </Link>
      {/* <Link
        to="/"
        style={{
          color: 'white',
          marginLeft: '30px',
          fontWeight: 700,
          fontSize: '18px',
        }}
      >
        <p>Support</p>
      </Link> */}
      <Link
        to="/"
        style={{
          color: 'white',
          marginLeft: '30px',
          fontWeight: 700,
          fontSize: '18px',
        }}
        className="NavLink"
      >
        <p>About Us</p>
      </Link>
      {/* <Link
        to="/"
        style={{
          color: 'white',
          marginLeft: '30px',
          fontWeight: 700,
          fontSize: '18px',
        }}
      >
        <p>Login</p>
      </Link> */}
      {/* </div> */}
      <div
        style={{ display: 'flex', alignItems: 'center', marginLeft: '35px' }}
      >
        <input
          type="text"
          placeholder="Search for products..."
          style={{
            padding: '15px',
            border: '1px solid #fff',
            borderRadius: '25px',
            marginRight: '10px',
            background: 'transparent',
            color: '#fff',
            width: '180px',
            height: '20px',
            fontSize: '18px',
          }}
          className="search-box"
        />
        {/* <button
          style={{
            padding: '10px',
            border: '1px solid #fff',
            borderRadius: '4px',
            background: 'transparent',
            color: '#fff',
            cursor: 'pointer',
          }}
        >
          Search
        </button> */}
      </div>
      <img
        src={ShoppingBag}
        className="ShoppingBag"
        alt="Shopping-Bag"
        style={{
          objectFit: 'contain',
          height: '28px',
          marginLeft: '35px',
          cursor: 'pointer',
        }}
        title="Shopping Bag"
      />
      <img
        src={Favs}
        className="Favourites"
        alt="Favourites-Img"
        style={{
          objectFit: 'contain',
          height: '28px',
          marginLeft: '30px',
          cursor: 'pointer',
        }}
        title="Favourites"
      />
      <img
        src={ProfilePic}
        alt="ProfilePic-Img"
        className="ProfilePic"
        style={{
          objectFit: 'contain',
          height: '28px',
          marginLeft: '30px',
          marginRight: '15px',
          cursor: 'pointer',
        }}
        title="User Profile"
      />
    </div>
  );
}

export default Header;
