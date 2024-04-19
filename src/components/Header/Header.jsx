import React, { useState, useEffect, useContext } from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import Logo from '/src/assets/Logo.svg';
import Context from '../../Context/Context';
import DropDown from '../Drop-Down/DropDown';
import { FiMenu } from 'react-icons/fi';
import { FaShoppingBag } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import ModelsCard5 from '/src/assets/card-image2.png';
import ModelsCard1 from '/src/assets/card-image7.png';
import ModelsCard4 from '/src/assets/card-image4.png';
import ModelsCard3 from '/src/assets/riya-giveaway.png';
import ModelsCard6 from '/src/assets/card-image6.png';
import ModelsCard2 from '/src/assets/card-image3.png';

import Cart from '../Cart/Cart.jsx';

function Header() {
  const ctx = useContext(Context);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'The Seer',
      image: ModelsCard1,
      para: 'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.',
      price: 37000,
    },
    {
      id: 2,
      title: 'Viper-T',
      image: ModelsCard2,
      para: 'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.',
      price: 37000,
    },
    {
      id: 3,
      title: 'T-Shirt 3',
      image: ModelsCard3,
      para: 'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.',
      price: 37000,
    },
    {
      id: 4,
      title: 'T-Shirt 4',
      image: ModelsCard4,
      para: 'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.',
      price: 37000,
    },
    {
      id: 5,
      title: 'T-Shirt 5',
      image: ModelsCard5,
      para: 'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.',
      price: 37000,
    },
    {
      id: 6,
      title: 'T-Shirt 6',
      image: ModelsCard6,
      para: 'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.',
      price: 37000,
    },

    // Add more product objects here...
  ]);
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

  return (
    <div className="header">
      {ctx.isDrop ? <DropDown /> : ''}
      {ctx.modal ? <Cart /> : ''}
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
              height: '120px',
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
          <NavLink to="/about" className="NavLink">
            About Us
          </NavLink>
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
                    height: '50px',
                    width: '50px',
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
        <div className="icon-container" style={{ marginRight: '5px' }}>
          <FaShoppingBag
            className="icon"
            onClick={() => {
              ctx.setModalVal(true);
            }}
            title="Shopping Cart"
          />

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
