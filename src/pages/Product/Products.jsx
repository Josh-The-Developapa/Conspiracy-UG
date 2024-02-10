import React from 'react';
import './Products.css';
import Header from '../../components/Header/Header.jsx';

function Products() {
  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'white',
        width: '100vw',
        position: 'absolute',
        height: '100vh',
        top: 0,
        left: 0,
      }}
    >
      <Header />
    </div>
  );
}

export default Products;
