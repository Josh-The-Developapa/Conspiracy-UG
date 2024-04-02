import React, { useContext, useEffect, useState } from 'react';
import Context from '../../Context/Context';
import { IoMdTrash } from 'react-icons/io';
import './Cart.css';

function Modal() {
  const ctx = useContext(Context);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('CartItems')) return;
    setCartItems(JSON.parse(localStorage.getItem('CartItems')));
  }, []);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].quantity = newQuantity;
    setCartItems(updatedCartItems);
    localStorage.setItem('CartItems', JSON.stringify(updatedCartItems));
  };

  const handleDeleteItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem('CartItems', JSON.stringify(updatedCartItems));
  };

  const computeCost = (array) => {
    let totalQuantity = 0;
    let totalCost = 0;
    array.forEach((item) => {
      totalQuantity += item.quantity;
      totalCost += item.price * item.quantity;
    });
    return { totalQuantity, totalCost };
  };

  return (
    <div className="modal-container">
      <div className="modalBG" onClick={() => ctx.setModalVal(false)} />
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">Your Cart</h3>
          <button className="close-btn" onClick={() => ctx.setModalVal(false)}>
            &times;
          </button>
        </div>
        <div className="modal-content">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div className="item-container" key={index}>
                <img
                  src={`/src/assets/${item.image}`}
                  alt={item.title}
                  className="item-image"
                />
                <div className="item-details">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-price">
                    {item.price.toLocaleString('en-US')} UGX
                  </p>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    step="1"
                    value={item.quantity}
                    onChange={(e) => {
                      const newQuantity = parseInt(e.target.value) || 1;
                      handleQuantityChange(index, newQuantity);
                    }}
                  />
                </div>
                <IoMdTrash
                  className="trash-can"
                  onClick={() => handleDeleteItem(index)}
                />
              </div>
            ))
          ) : (
            <h2 style={{ color: '#000000' }}>No Items in Cart</h2>
          )}
        </div>
        <div className="total-info">
          <h3>Total Shirts: {computeCost(cartItems).totalQuantity}</h3>
          <h3>
            Total Cost:{' '}
            {computeCost(cartItems).totalCost.toLocaleString('en-US')} UGX
          </h3>
          <h3>Cash on Delivery - Only</h3>
          <button className="checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
