import React, { useContext, useEffect, useState } from 'react';
import Context from '../../Context/Context';
import { IoMdTrash } from 'react-icons/io';
import { FiCheckCircle } from 'react-icons/fi';
import './Cart.css';

function Cart() {
  const ctx = useContext(Context);
  const [cartItems, setCartItems] = useState([]);
  const [address, setAddress] = useState({
    city: '',
    street: '',
    country: 'Uganda',
    phoneNumber: '',
  });
  const [error, setError] = useState('');
  const [checkoutComplete, setCheckoutComplete] = useState(false);

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
      totalQuantity += Number(item.quantity);
      totalCost += item.price * item.quantity;
    });
    return { totalQuantity, totalCost };
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const handleCheckout = () => {
    if (!address.city || !address.street || !address.phoneNumber) {
      setError('Please fill in all required fields.');
    } else {
      setError('');
      const checkoutData = {
        cartItems: cartItems,
        address: address,
        // city: address.city,
        // phoneNumber: address.phoneNumber,
        totalShirts: computeCost(cartItems).totalQuantity,
        totalCost: computeCost(cartItems).totalCost,
      };

      // Send data to Firebase
      fetch(
        'https://conspiracy-67f09-default-rtdb.firebaseio.com/orders.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(checkoutData),
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log('Checkout complete:', data);
          setCheckoutComplete(true);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
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
                    // max="10"
                    step="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, e.target.value)
                    }
                  />
                </div>
                <IoMdTrash
                  className="trash-can"
                  onClick={() => handleDeleteItem(index)}
                />
              </div>
            ))
          ) : (
            <h2 style={{ color: 'black' }}>No Items in Cart</h2>
          )}
        </div>
        <div className="address-section">
          <h3>Delivery Address</h3>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={address.city}
            onChange={handleAddressChange}
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={address.street}
            onChange={handleAddressChange}
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={address.phoneNumber}
            onChange={handleAddressChange}
          />
          {error && <p style={{ color: 'red', margin: '5px 0' }}>{error}</p>}
          <div className="total-info">
            <h3>
              Total Shirts:{' '}
              {+computeCost(cartItems).totalQuantity.toLocaleString('en-US')}
            </h3>
            <h3>
              Total Cost:{' '}
              {computeCost(cartItems).totalCost.toLocaleString('en-US')} UGX
            </h3>
            {!checkoutComplete ? (
              <button className="checkout-btn" onClick={handleCheckout}>
                Confirm Order
              </button>
            ) : (
              <div className="checkout-complete">
                <FiCheckCircle className="checkout-icon" s />
                <span>Order sent</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
