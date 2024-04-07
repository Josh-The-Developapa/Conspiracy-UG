import React, { useState, useEffect } from 'react';
import './Orders.css'; // Import CSS file for additional styling
import Header from '../../components/Header/Header.jsx';
import { ImSpinner9 } from 'react-icons/im';
import ModelsPic from '../../assets/card-image3.png';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://conspiracy-67f09-default-rtdb.firebaseio.com/orders.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        const array = Object.values(data); // Simplify object conversion
        const sortedOrders = array.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        ); // Sort orders by date
        setOrders(sortedOrders);
        setError('');
      })
      .catch((error) => {
        setLoading(false);
        setError(
          'Failed to fetch orders. Please check your internet connection.'
        );
        console.error('Error fetching orders:', error);
      });
  }, []);

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
      <div className="orders-container">
        <div className="orders-header">
          <h1 className="page-title">Orders</h1>
        </div>
        <p
          style={{
            marginLeft: '10px',
            marginRight: '10px',
            maxWidth: '700px',
            textAlign: 'center',
          }}
        >
          Welcome to the Conspiracy UG orders page. This page is private and{' '}
          exclusively accessed strictly by only the shareholders of Conspiracy
          UG
        </p>
        {loading ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {' '}
            <ImSpinner9 className="loading-icon" />
          </div>
        ) : (
          ''
        )}
        <p className="error-message">{error}</p>
        <div className="orders-list">
          {orders.length > 0 && !loading
            ? orders.map((order, index) => (
                <div key={index} className="order-item">
                  <h1 className="page-title">Receipt</h1>
                  <p className="order-details">
                    <span className="order-label">Full Name:</span>{' '}
                    {order.address.fullName} <br />
                    <br />
                    <span className="order-label">Phone Number:</span>{' '}
                    {order.address.phoneNumber} <br />
                    <br />
                    <span className="order-label">City:</span>{' '}
                    {order.address.cityTown} <br />
                    <br />
                    <span className="order-label">Street:</span>{' '}
                    {order.address.street} <br />
                    <br />
                    <span className="order-label">
                      Total number of shirts:
                    </span>{' '}
                    {order.totalShirts} <br />
                    <br />
                    <span className="order-label">Date:</span>{' '}
                    {`${order.date.split()}`} <br />
                    <br />
                    <span className="order-label">Coupon:</span> {order.coupon}
                    <br />
                    <br />
                    <span className="order-label">TOTAL COST:</span>{' '}
                    <h2
                      style={{ margin: 0 }}
                    >{`${order.totalCost.toLocaleString(
                      'en-US'
                    )} UGX`}</h2>{' '}
                    <br />
                    <br />
                  </p>
                  <h2 className="shirts-title">Shirts Ordered:</h2>
                  <div className="shirts-ordered">
                    {Object.values(order.cartItems).map((shirt, shirtIndex) => (
                      <div key={shirtIndex} className="shirt-item">
                        <img
                          src={`/src/assets/${shirt.image}`}
                          // src={ModelsPic}
                          alt={shirt.title}
                          className="shirt-image"
                        />
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '10px',
                          }}
                        >
                          {`${shirt.title}   `}
                          <br />
                          Price: {`${shirt.price.toLocaleString('en-US')} UGX`}
                          <br />
                          Quantity: {shirt.quantity}
                          <br />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            : ''}
        </div>
      </div>
    </div>
  );
}

export default Orders;
