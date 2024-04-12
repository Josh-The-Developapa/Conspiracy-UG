import React from 'react';
import Header from '../../components/Header/Header';

function NotFound() {
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
      <h1 style={{ marginTop: '90px', textAlign: 'center' }}>Page Not Found</h1>
      <p
        style={{ marginLeft: '10px', marginRight: '10px', textAlign: 'center' }}
      >
        Hello there. It seems the page you are requesting to view is either
        non-existent, or you are unauthorised to access it
      </p>
    </div>
  );
}

export default NotFound;
