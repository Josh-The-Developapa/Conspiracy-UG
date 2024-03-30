import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import ModelsCard5 from '../../assets/card-image2.png';
import ModelsCard1 from '../../assets/card-image7.png';
import ModelsCard4 from '../../assets/card-image4.png';
import ModelsCard3 from '../../assets/riya-giveaway.png';
import ModelsCard6 from '../../assets/card-image6.png';
import ModelsCard2 from '../../assets/card-image3.png';
import Footer from '../../components/Footer/footer';
import ScrollDownButton from '../../components/ScrollDownButton/ScrollDownButton.jsx';

function Home() {
  async function sendProductDataToFirebase(productName, description) {
    // Firebase URL
    const firebaseUrl =
      'https://conspiracy-67f09-default-rtdb.firebaseio.com/products.json';

    // Data to be sent
    const data = {
      productName: productName,
      description: description,
    };

    // Request options
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    try {
      // Make the fetch request
      const response = await fetch(firebaseUrl, requestOptions);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Data sent successfully:', responseData);
      // Handle success
    } catch (error) {
      console.error('Error sending data to Firebase:', error.message);
      // Handle error
    }
  }
  // sendProductDataToFirebase(
  //   'T-Shirts',
  //   'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.'
  // );

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
      <div className="models-pic">
        <ScrollDownButton />
      </div>

      {/* <img src={Models} alt="Models-Pic" className="models-pic" /> */}
      <div
        style={{
          textAlign: 'center',
          padding: '20px',
          // width: '100%',
        }}
      >
        <h2 style={{ fontSize: '35px' }}>Check Out Our Latest Collections</h2>
        <p style={{ fontSize: '20px' }}>
          Discover trendy outfits for every occasion. <br />
        </p>
      </div>
      <div className="cardDiv">
        <Card
          title="T-Shirts"
          image={ModelsCard1}
          para={
            'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.'
          }
          price={'35,000 UGX'}
        />
        <Card
          title="T-Shirts"
          image={ModelsCard2}
          para={
            'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.'
          }
          price={'35,000 UGX'}
        />
        <Card
          title="T-Shirts"
          image={ModelsCard3}
          para={
            'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.'
          }
          price={'35,000 UGX'}
        />
        <Card
          title="T-Shirts"
          image={ModelsCard4}
          para={
            'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.'
          }
          price={'35,000 UGX'}
        />
        <Card
          title="T-Shirts"
          image={ModelsCard5}
          para={
            'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.'
          }
          price={'35,000 UGX'}
        />
        <Card
          title="T-Shirts"
          image={ModelsCard6}
          para={
            'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.'
          }
          price={'35,000 UGX'}
        />
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '10px',
          marginRight: '10px',
          marginTop: '100px',
        }}
      >
        <p style={{ maxWidth: '700px' }}>
          Step into style with our curated collection of fashion essentials.
          From timeless classics to trendy must-haves, we've got you covered.
          Explore the artistry of self-expression through our meticulously
          crafted pieces, designed to empower and inspire your unique sense of
          style. Elevate your wardrobe and make a statement with every step you
          take.
        </p>
      </div>
      {/* <button style={{ backgroundColor: 'green', borderRadius: '25px' }}> */}
      {/* </button> */}
      <Footer />
    </div>
  );
}

export default Home;
