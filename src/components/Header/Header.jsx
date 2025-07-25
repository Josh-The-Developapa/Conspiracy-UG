import React, { useState, useEffect, useContext } from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import Logo from '/src/assets/Logo.svg';
import Context from '../../Context/Context';
import DropDown from '../Drop-Down/DropDown';
import { FiMenu } from 'react-icons/fi';
import { FaShoppingBag } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import Hope from '/src/assets/hope.jpg';
import Reckless from '/src/assets/Reckless.png';
import Overthinker from '/src/assets/DOTI.jpeg';

import Cart from '../Cart/Cart.jsx';
import Modal from '../Modal/Modal.jsx';

function Header() {
  const ctx = useContext(Context);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Hope',
      image: Hope,
      para: "Hope. A delicate thread in life's tapestry. Weaving dreams into reality with timeless grace.",
      price: 38000,
    },
    {
      id: 3,
      title: 'Reckless',
      image: Reckless,
      para: 'Rock the edge! Our fashion screams rebellion. Break the mold, flaunt your style.',
      price: 38000,
    },
    {
      id: 2,
      title: 'Overthinker',
      image: Overthinker,
      para: 'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.',
      price: 38000,
    },

    // Add more product objects here...
  ]);
  // useEffect(() => {
  //   if (!localStorage.getItem('CartItems')) {
  //     localStorage.getItem('CartItems', '[]');
  //   }
  // }, []);

  const cartItems = JSON.parse(
    localStorage.getItem('CartItems') ? localStorage.getItem('CartItems') : '[]'
  );

  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredProducts([]);
      return;
    }

    const filteredResults = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredResults);
  }, [searchTerm, products]);

  const computeCost = (array) => {
    let totalQuantity = 0;
    let totalCost = 0;
    array.forEach((item) => {
      totalQuantity += Number(item.quantity);
      totalCost += item.price * item.quantity;
    });
    return { totalQuantity, totalCost };
  };

  return (
    <div className="header">
      {ctx.isDrop ? <DropDown /> : ''}
      {ctx.modal ? <Cart /> : ''}
      {ctx.contactCard ? <Modal /> : ''}
      <div style={{ display: 'flex' }}>
        {' '}
        <FiMenu
          className="Menu-icon"
          onClick={() => {
            ctx.setIsDropVal(true);
          }}
        />
      </div>
      <div className="logo-container">
        <Link to="/" className="logo">
          <img
            src={Logo}
            style={{
              height: '75px',
              // width: '140px',
              // backgroundColor: 'green',
            }}
          />
        </Link>
      </div>
      <div className="central-header-div">
        <div className="nav-links">
          <NavLink to="/" className="NavLink" style={{ marginLeft: '50px' }}>
            Home
          </NavLink>
          {/* <NavLink to="/about" className="NavLink">
            About Us
          </NavLink> */}
        </div>
        <div className="search-container">
          <CiSearch
            style={{
              height: '28px',
              width: '28px',
              cursor: 'pointer',
            }}
          />
          <input
            type="text"
            placeholder="Search for products..."
            className="search-box"
            value={searchTerm}
            onChange={handleChange}
          />
          <div className="search-underline"></div>
          <div className="search-results">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="search-item"
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                  style={{
                    height: '80px',
                    width: '80px',
                    borderRadius: '50px',
                    objectFit: 'cover',
                  }}
                />
                <p style={{ marginLeft: '10px' }}>{product.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="icons-container">
        <button
          className="contact-btn"
          onClick={() => {
            ctx.setContactCard(true);
          }}
        >
          Contact Us
        </button>
        <div className="icon-container" style={{ marginRight: '5px' }}>
          <FaShoppingBag
            className="icon"
            onClick={() => {
              ctx.setModalVal(true);
            }}
            title="Shopping Cart"
          />
          <div
            className={ctx.animateCart ? 'notification-active' : 'notification'}
            style={{
              display: cartItems.length == 0 ? 'none' : 'flex',
            }}
          >
            {cartItems
              ? computeCost(cartItems).totalQuantity.toLocaleString('en-US')
              : 0}
          </div>
          <div className="hover-ring"></div>
        </div>
        {/* <div className="icon-container">
          <FaUser className="icon" />
          <div className="hover-ring"></div>
        </div> */}
        {/* <button
          style={{
            color: 'white',
            border: '1px solid white',
            marginLeft: '20px',
          }}
        >
          Login
        </button> */}
      </div>
    </div>
  );
}

export default Header;
