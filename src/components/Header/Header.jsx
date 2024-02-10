import React, { useState, useEffect } from 'react';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import ShoppingBag from '../../assets/bag.png';
import Favs from '../../assets/heart.png';
import ProfilePic from '../../assets/user.png';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://conspiracy-67f09-default-rtdb.firebaseio.com/products.json'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        const loadedProducts = [];
        for (const key in data) {
          loadedProducts.push({
            id: key,
            productName: data[key].productName,
            description: data[key].description,
          });
        }
        setProducts(loadedProducts);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

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
      <div className="logo-container">
        <Link to="/" className="logo">
          <h2>Conspiracy UG</h2>
        </Link>
      </div>
      <div className="nav-links">
        <NavLink to="/" className="NavLink">
          Home
        </NavLink>
        <NavLink to="/products" className="NavLink">
          Products
        </NavLink>
        <NavLink to="/about" className="NavLink">
          About Us
        </NavLink>
      </div>
      <div className="search-container">
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
      <div className="icons-container">
        <img src={ShoppingBag} className="icon" alt="Shopping Bag" />
        <img src={Favs} className="icon" alt="Favourites" />
        <img src={ProfilePic} className="icon" alt="User Profile" />
      </div>
    </div>
  );
}

export default Header;
