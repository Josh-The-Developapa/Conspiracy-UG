import React, { useState, useEffect, useContext } from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
// import Favs from '../../assets/heart.png';
import Logo from '../../assets/Logo.png';
import Context from '../../Context/Context';
import DropDown from '../Drop-Down/DropDown';
import { FiMenu } from 'react-icons/fi';
import { FaShoppingBag, FaUser } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

function Header() {
  const ctx = useContext(Context);
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://conspiracy-67f09-default-rtdb.firebaseio.com/products.json'
  //       );
  //       if (!response.ok) {
  //         console.log('Failed to fetch products');
  //         throw new Error('Failed to fetch products');
  //       }
  //       const data = await response.json();
  //       const loadedProducts = [];
  //       for (const key in data) {
  //         loadedProducts.push({
  //           id: key,
  //           productName: data[key].productName,
  //           description: data[key].description,
  //         });
  //       }
  //       setProducts(loadedProducts);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredProducts([]);
      return;
    }

    const filteredResults = products.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filteredResults);
  }, [searchTerm, products]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="header">
      {ctx.isDrop ? <DropDown /> : ''}
      <FiMenu
        className="Menu-icon"
        onClick={() => {
          ctx.setIsDropVal(true);
        }}
      />
      <div className="logo-container">
        <Link to="/" className="logo">
          <img src={Logo} style={{ height: '60px', width: '140px' }} />
        </Link>
        <p
          style={{ marginLeft: '5px', fontSize: '13px', marginBottom: '50px' }}
          // className="footer-heading"
        >
          UG
        </p>
      </div>
      <div className="central-header-div">
        <div className="nav-links">
          <NavLink to="/" className="NavLink" style={{ marginLeft: '50px' }}>
            Home
          </NavLink>
          {/* <NavLink to="/products" className="NavLink">
          Products
        </NavLink> */}
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
              // backgroundColor: 'green',
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
              <div key={product.id} className="search-item">
                <p>{product.productName}</p>
                {/* <p>{product.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="icons-container">
        <FaShoppingBag className="icon" />
        {/* <img src={Favs} className="icon" alt="Favourites" /> */}
        <FaUser className="icon" />
        <button
          style={{
            color: 'white',
            border: '1px solid white',
            marginLeft: '20px',
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Header;
