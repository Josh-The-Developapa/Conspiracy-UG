import React, { useState, useEffect } from 'react';
import './Coupons.css'; // Import CSS file for additional styling
import Header from '../../components/Header/Header.jsx';
import { ImSpinner9 } from 'react-icons/im';
import ModelsPic from '../../assets/card-image3.png';
import Footer from '../../components/Footer/footer.jsx';

function Coupons() {
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
          Greetings and welcome to the Conspiracy UG coupons page. This platform
          is dedicated to facilitating orders for our esteemed shareholders,
          providing an exclusive and private space tailored to their needs.
          Access to this page is restricted solely to authorized shareholders of
          Conspiracy UG, ensuring confidentiality and security in all
          transactions.
        </p>
        <h2 className="error-message">{error}</h2>
        <div className="orders-list"></div>
      </div>
      <Footer />
    </div>
  );
}

export default Coupons;
