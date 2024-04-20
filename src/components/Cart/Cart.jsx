import React, { useContext, useEffect, useState } from 'react';
import Context from '../../Context/Context.jsx';
import { IoMdTrash } from 'react-icons/io';
import { FiCheckCircle } from 'react-icons/fi';
import { ImSpinner9 } from 'react-icons/im';
import { IoIosAddCircle } from 'react-icons/io';
import { IoMdArrowDropupCircle } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';

import './Cart.css';

function Cart() {
  const ctx = useContext(Context);
  const [cartItems, setCartItems] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [error, setError] = useState('');
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [addressExpanded, setAddressExpanded] = useState(false); // State to track address section expansion
  const [date, setDate] = useState('');
  const [address, setAddress] = useState({
    fullName: '',
    cityTown: '', // Removed stateProvince
    street: '',
    country: 'Uganda',
    phoneNumber: '',
    date: date,
  });

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

  const handleSizeChange = (index, newSize) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index].size = newSize;
    setCartItems(updatedCartItems);
    localStorage.setItem('CartItems', JSON.stringify(updatedCartItems));
  };

  const handleCouponVerification = async () => {
    const couponData = await fetchCouponData();
    console.log(couponData);

    if (coupon.trim() == '') {
      setDiscount(0);
      setError('');
      return;
    }

    for (let i in couponData) {
      if (coupon.trim() == couponData[i].couponName) {
        setError(`Valid Coupon. ${couponData[i].discount}% discount applied`);
        setDiscount(couponData[i].discount);
        return;
      }
    }
    setDiscount(0);
    setError('Invalid coupon. No discount applied');
    return;
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
    setError('');
  };

  const handleCouponChange = (e) => {
    setCoupon(e.target.value);
  };

  const handleCheckout = async () => {
    if (cartItems.length == 0) {
      setError('Please add some items to cart first');
      return;
    }

    setLoading(true);

    if (!address.cityTown || !address.street || !address.phoneNumber) {
      setError('Please fill in all the above fields.');
      setLoading(false); // Reset loading state
    } else {
      setError('');
      // Get the current time in milliseconds
      const currentTimeMillis = Date.now();

      // Define the time zone offset for EAT in milliseconds
      const eatOffsetMillis = 3 * 60 * 60 * 1000; // 3 hours * 60 minutes * 60 seconds * 1000 milliseconds

      // Calculate the time in EAT by adding the offset to the current time
      const eatTimeMillis = currentTimeMillis + eatOffsetMillis;

      // Create a new Date object using the EAT time
      const eatTime = new Date(eatTimeMillis);

      // Format the EAT time as a string
      const eatTimeString = eatTime.toUTCString();

      const checkoutData = {
        cartItems: cartItems,
        address: address,
        totalShirts: computeCost(cartItems).totalQuantity,
        totalCost:
          computeCost(cartItems).totalCost * (1 - Number(discount) / 100),
        coupon: coupon,
        date: eatTimeString,
        status: 'pending',
      };

      const emailHTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Conspiracy Order Summary</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap');

      body {
        background-color: #000;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
      }

      .container {
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
      }

      .header {
        text-align: center;
        margin-bottom: 20px;
      }

      .logo {
        max-width: 100px;
        height: auto;
      }

      .order-summary {
        background-color: #222;
        color: #fff;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
      }

      .title {
        font-family: 'Caveat Brush', cursive;
        font-size: 2rem;
        margin-bottom: 20px;
      }

      .summary-text {
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 20px;
      }

      .order-details {
        font-size: 1rem;
        line-height: 1.6;
      }

      .order-label {
        font-weight: bold;
      }

      .order-link {
        color: #00bcd4;
        text-decoration: none;
      }

      .order-link:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img
          src="../../assets/Logo.svg"
          alt="Conspiracy Logo"
          class="logo"
          style="height: 120px"
        />
      </div>
      <div class="order-summary">
        <h1 class="title">Order Summary</h1>
        <p class="summary-text">Hello Conspiracy,</p>
        <p class="summary-text">
          You have received a new order for shirts. Below is a brief summary of
          the order. For more details, visit the
          <a
            href="https://conspiracy-ug.onrender.com/orders/3jqLJb4Z"
            class="order-link"
            >Orders Page</a
          >.
        </p>
        <div class="order-details">
          <p>
            <span class="order-label">Full Name:</span>
            ${checkoutData.address.fullName} <br /><br />
            <span class="order-label">Phone Number:</span>
            ${checkoutData.address.phoneNumber} <br /><br />
            <span class="order-label">City:</span>
            ${checkoutData.address.cityTown} <br /><br />
            <span class="order-label">Street:</span>
            ${checkoutData.address.street} <br /><br />
            <span class="order-label">Total number of shirts:</span>
            ${checkoutData.totalShirts} <br /><br />
            <span class="order-label">Date:</span>
            ${checkoutData.date
              .split('')
              .splice(0, order.date.length - 3)
              .join('')} <br /><br />
            <span class="order-label">Coupon:</span>
            ${checkoutData.coupon.trim() == '' ? 'None' : checkoutData.coupon}
            <br /><br />
            <span class="order-label">TOTAL COST:</span>
            ${checkoutData.totalCost.toLocaleString('en-US')} UGX
          </p>
        </div>
      </div>
    </div>
  </body>
</html>
`;

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
          // console.log('Checkout complete:', data);
          setCheckoutComplete(true);
          setLoading(false); // Reset loading state
        })
        .catch((error) => {
          console.error('Error:', error);
          setLoading(false); // Reset loading state
        });
    }
  };

  async function fetchCouponData() {
    // Firebase URL
    const firebaseUrl =
      'https://conspiracy-67f09-default-rtdb.firebaseio.com/coupons.json';

    // Request options
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      // Make the fetch request
      const response = await fetch(firebaseUrl, requestOptions);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      return responseData;
      // Handle success
    } catch (error) {
      return 'Error sending data to Firebase:';
      // Handle error
    }
  }

  return (
    <div className="modal-container">
      <div className="modalBG" onClick={() => ctx.setModalVal(false)} />
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">Your Cart</h3>
          <IoClose
            className="close-btn"
            onClick={() => ctx.setModalVal(false)}
          />
        </div>
        <div className="modal-content">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div className="item-container" key={index}>
                <img
                  src={`../../assets/${item.image}`}
                  alt={item.title}
                  className="item-image"
                />
                <div className="item-details">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-price">
                    {item.price.toLocaleString('en-US')} UGX
                  </p>
                  <input
                    style={{ width: '70px' }}
                    placeholder="quantity"
                    type="number"
                    min="1"
                    step="1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, e.target.value)
                    }
                  />
                  <br />
                  <input
                    style={{ width: '70px' }}
                    placeholder="Shirt size"
                    value={item.size}
                    onChange={(e) => handleSizeChange(index, e.target.value)}
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
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <h3>Add Delivery Address {/* <span> */}</h3>
            {addressExpanded ? (
              <IoMdArrowDropupCircle
                title="collapse"
                style={{
                  color: '#000000',
                  height: '35px',
                  width: '35px',
                  marginLeft: '10px',
                  cursor: 'pointer',
                }}
                onClick={() => setAddressExpanded(!addressExpanded)}
              />
            ) : (
              <IoIosAddCircle
                title="expand"
                style={{
                  color: '#000000',
                  height: '35px',
                  width: '35px',
                  marginLeft: '10px',
                  cursor: 'pointer',
                }}
                onClick={() => setAddressExpanded(!addressExpanded)}
              />
            )}
          </div>
          {/* </span> */}
          {addressExpanded && ( // Render input fields if address section is expanded
            <>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={address.fullName}
                onChange={handleAddressChange}
              />
              <input
                type="text"
                name="cityTown"
                placeholder="City or Town"
                value={address.cityTown}
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
            </>
          )}
          {/* <label style={{ color: 'black' }}>Enter Coupon:</label> */}
          <div>
            <input
              type="text"
              name="coupon"
              placeholder="Enter Coupon - Optional"
              value={coupon}
              onChange={handleCouponChange}
              style={{ marginBottom: '-5px', width: '50%' }}
            />{' '}
            <button onClick={handleCouponVerification} className="verify-btn">
              Verify
            </button>
          </div>
          {error && error.trim().includes('Valid') ? (
            <p
              style={{
                color: 'green',
                marginTop: '5px',
                marginBottom: '5px',
              }}
            >
              {error}
            </p>
          ) : (
            <p
              style={{
                color: 'red',
                marginTop: '5px',
                marginBottom: '5px',
              }}
            >
              {error}
            </p>
          )}
          <div className="total-info">
            <h3>
              Total Shirts:{' '}
              {+computeCost(cartItems).totalQuantity.toLocaleString('en-US')}
            </h3>
            <h3>
              Total Cost:{' '}
              {(
                computeCost(cartItems).totalCost *
                (1 - Number(discount) / 100)
              ).toLocaleString('en-US')}{' '}
              UGX
            </h3>
            {!checkoutComplete ? (
              <button className="checkout-btn" onClick={handleCheckout}>
                {loading ? (
                  <ImSpinner9
                    className="loading-icon"
                    style={{ color: '#ffffff', height: '30px', width: '30px' }}
                  />
                ) : (
                  'Confirm Order'
                )}
              </button>
            ) : (
              <div className="checkout-complete">
                <FiCheckCircle className="checkout-icon" />
                <span style={{ marginLeft: '10px' }}>Order sent</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
