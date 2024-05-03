import React, { useState, useEffect } from 'react';
import './Coupons.css';
import Header from '../../components/Header/Header.jsx';
import { ImSpinner9 } from 'react-icons/im';
import Footer from '../../components/Footer/footer.jsx';
import { useParams } from 'react-router-dom';

import './Coupons.css';

function Coupons() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [coupons, setCoupons] = useState([]);
  const [accessGranted, setAccessGranted] = useState(false);
  const { passcode } = useParams();

  useEffect(() => {
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
        const sortedOrders = array
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .filter((order) => {
            return order.status == 'pending';
          }); // Sort orders by date
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

    fetch('https://conspiracy-67f09-default-rtdb.firebaseio.com/coupons.json', {
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
          setError('No Coupons Found');
          return;
        }
        for (let i in data) {
          data[i].ID = i;
        }
        const array = Object.values(data);
        setCoupons(array);
        console.log(array);
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
          <h1 className="page-title">Coupons</h1>
        </div>
        {accessGranted ? (
          <p
            style={{
              marginLeft: '10px',
              marginRight: '10px',
              maxWidth: '700px',
              textAlign: 'center',
            }}
          >
            Welcome to the Conspiracy UG coupons page. This platform is
            specifically designed to monitor orders made using various coupons
            associated with affiliate marketers. Access to this page is limited
            to authorized shareholders of Conspiracy UG, guaranteeing
            confidentiality and security for all transactions.
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
        <div className="orders-list">
          {coupons.length > 0 && !loading ? (
            coupons.map((coupon) => {
              return (
                <div key={coupon.ID} className="order-item">
                  <h1 className="page-title">Coupon Report</h1>

                  <p className="order-details">
                    <p className="order-details">
                      <span className="order-label">Coupon Name:</span>{' '}
                      {coupon.couponName} <br />
                      {/* <br /> */}
                      <span className="order-label">Person:</span>{' '}
                      {coupon.person} <br />
                      <span className="order-label">Discount:</span>{' '}
                      {`${coupon.discount}%`} <br />
                      {/* <br /> */}
                      {/* <br />
                  <br /> */}
                    </p>
                  </p>
                  <h3 className="shirts-title">
                    Payment Due:{' '}
                    {`${(
                      2260 *
                      orders
                        .filter((order) => {
                          return order.coupon == coupon.couponName;
                        })
                        .map((order) => {
                          return order.totalShirts;
                        })
                        .reduce((accumulator, currentValue) => {
                          return accumulator + currentValue;
                        }, 0)
                    ).toLocaleString('en-US')} UGX`}
                  </h3>
                  <h3 className="shirts-title">
                    Pending orders using coupon:{' '}
                    {`${
                      orders.filter((order) => {
                        return order.coupon == coupon.couponName;
                      }).length
                    }`}
                  </h3>
                  <div className="shirts-ordered">
                    {orders.length > 0
                      ? orders
                          .filter((order) => {
                            return order.coupon == coupon.couponName;
                          })
                          .map((order) => {
                            return (
                              <div
                                className="shirt-item"
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  justifyContent: 'center',
                                  alignItems: 'flex-start',
                                }}
                              >
                                <span>
                                  Date:{' '}
                                  {order.date
                                    .split('')
                                    .splice(0, order.date.length - 3)
                                    .join('')}
                                </span>
                                <span>Coupon: {order.coupon}</span>
                                <span>
                                  Discounted Cost:{' '}
                                  {`${order.totalCost.toLocaleString(
                                    'en-US'
                                  )} UGX`}
                                </span>
                                <span>
                                  Actual Cost:{' '}
                                  {`${(
                                    38000 * order.totalShirts
                                  ).toLocaleString('en-US')} UGX`}
                                </span>
                                <span>Total Shirts: {order.totalShirts}</span>
                              </div>
                            );
                          })
                      : ''}
                  </div>
                </div>
              );
            })
          ) : (
            <ImSpinner9 className="loading-icon" />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Coupons;
