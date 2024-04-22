import React, { useState, useEffect } from 'react';
import './Orders.css';
import Header from '../../components/Header/Header.jsx';
import { ImSpinner9 } from 'react-icons/im';
import Footer from '../../components/Footer/footer.jsx';
import { useParams } from 'react-router-dom';

function Orders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);
  const { passcode } = useParams();

  useEffect(() => {
    if (!localStorage.getItem('CartItems')) {
      localStorage.setItem('CartItems', []);
    }
    if (passcode == '3jqLJb4Z') setAccessGranted(true);
    setLoading(true);
    fetch('https://conspiracy-67f09-default-rtdb.firebaseio.com/orders.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        if (data == undefined) {
          setLoading(false);
          setError('No Orders Found');
          return;
        }
        console.log(data);
        for (let i in data) {
          data[i].ID = i;
        }
        const array = Object.values(data); // Simplify object conversion
        console.log(array);
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

  const handleMarkComplete = async (index) => {
    const updatedOrders = [...orders];
    updatedOrders[index].status = 'Completed';

    const order = updatedOrders[index];

    try {
      const res = await fetch(
        `https://conspiracy-67f09-default-rtdb.firebaseio.com/orders/${updatedOrders[index].ID}.json`,
        // 'https://conspiracy-67f09-default-rtdb.firebaseio.com/orders/-NurfDkwqmqqqduPO729'
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            cartItems: order.cartItems,
            address: order.address,
            totalShirts: order.cartItems.totalQuantity,
            totalCost: order.cartItems.totalCost,
            coupon: order.coupon,
            date: order.eatTimeString,
            status: 'Completed',
          }),
        }
      );
      setOrders(updatedOrders);
    } catch (error) {
      console.error('Error updating order status:', error);
      // Handle error, e.g., display error message to user
    }
  };

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
        </div>{' '}
        {accessGranted ? (
          <p
            style={{
              marginLeft: '10px',
              marginRight: '10px',
              maxWidth: '700px',
              textAlign: 'center',
            }}
          >
            Greetings and welcome to the Conspiracy UG orders page. This
            platform is dedicated to facilitating orders for our esteemed
            shareholders, providing an exclusive and private space tailored to
            their needs. Access to this page is restricted solely to authorized
            shareholders of Conspiracy UG, ensuring confidentiality and security
            in all transactions.
          </p>
        ) : (
          <p
            style={{
              marginLeft: '10px',
              marginRight: '10px',
              maxWidth: '700px',
              textAlign: 'center',
            }}
          >
            Hello there. It seems you're trying to gain unauthorised access to
            this page. It is only exclusive to the shareholder of Conspiracy UG
          </p>
        )}
        <h2 className="error-message">{error}</h2>
        {accessGranted ? (
          <div className="orders-list">
            {!loading ? (
              orders.map((order, index) => (
                <div key={index} className="order-item">
                  <h1 className="page-title">Receipt</h1>
                  {order.status == 'Completed' ? (
                    <button
                      style={{ color: 'white', backgroundColor: 'green' }}
                      disabled
                    >
                      Completed
                    </button>
                  ) : (
                    <button
                      style={{ color: 'white', backgroundColor: '#004cff' }}
                      onClick={() => handleMarkComplete(index)}
                    >
                      Pending
                    </button>
                  )}
                  <p className="order-details">
                    <span className="order-label">Full Name:</span>{' '}
                    {order.address.fullName} <br />
                    {/* <br /> */}
                    <span className="order-label">Phone Number:</span>{' '}
                    {order.address.phoneNumber} <br />
                    {/* <br /> */}
                    <span className="order-label">City:</span>{' '}
                    {order.address.cityTown} <br />
                    {/* <br /> */}
                    <span className="order-label">Street:</span>{' '}
                    {order.address.street} <br />
                    {/* <br /> */}
                    <span className="order-label">
                      Total number of shirts:
                    </span>{' '}
                    {order.totalShirts} <br />
                    {/* <br /> */}
                    <span className="order-label">Date:</span>{' '}
                    {/* {`${order.date}`} <br /> */}
                    {`${order.date
                      .split('')
                      .splice(0, order.date.length - 3)
                      .join('')}`}{' '}
                    <br />
                    {/* <br /> */}
                    <span className="order-label">Coupon:</span>{' '}
                    {order.coupon.trim() == '' ? 'None' : order.coupon}
                    <br />
                    {/* <br /> */}
                    {/* <span className="order-label">STATUS:</span> <br />
                    <h2 style={{ margin: 0, marginBottom: '10px' }}>
                      {order.status.toUpperCase()}
                    </h2> */}
                    {/* <br /> */}
                    <span className="order-label">TOTAL COST:</span> <br />
                    {/* <br /> */}
                    <h2
                      style={{ margin: 0 }}
                    >{`${order.totalCost.toLocaleString(
                      'en-US'
                    )} UGX`}</h2>{' '}
                    {/* <br />
                  <br /> */}
                  </p>
                  <h3 className="shirts-title">Shirts Ordered:</h3>
                  <div className="shirts-ordered">
                    {Object.values(order.cartItems).map((shirt, shirtIndex) => (
                      <div key={shirtIndex} className="shirt-item">
                        <img
                          src={`../../assets/${shirt.image}`}
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
                          Size: {shirt.size}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <ImSpinner9 className="loading-icon" />
            )}
          </div>
        ) : (
          ''
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Orders;
