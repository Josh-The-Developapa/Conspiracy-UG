import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Models from '../../assets/Models.png';
// import Models from '../../assets/Models3.jpeg';
import Card from '../../components/Card/Card';
import ModelsCard5 from '../../assets/card-image1.png';
import ModelsCard1 from '../../assets/card-image2.png';
import ModelsCard4 from '../../assets/card-image4.png';
import ModelsCard6 from '../../assets/card-image6.png';

import ModelsCard2 from '../../assets/card-image2.webp';
import ModelsCard3 from '../../assets/card-image3.webp';
import Footer from '../../components/Footer/footer';
import Testimonials from '../../components/Testimonials/Testimonials';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

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
  //   'Flight Jackets',
  //   'Elevate your style with our flight jackets. Crafted for adventure, designed for style'
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
      {/* <div className="models-pic"></div> */}
      <img src={Models} alt="Models-Pic" className="models-pic" />
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
        />
        <Card
          title="Flight Jackets"
          image={ModelsCard2}
          para={
            'Elevate your style with our flight jackets. Crafted for adventure, designed for style'
          }
        />
        <Card
          title="Varsity jackets"
          image={ModelsCard3}
          para={
            "Timeless design meets modern comfort. Discover Conspiracy's varsity jackets collection."
          }
        />
        <Card
          title="T-Shirts"
          image={ModelsCard4}
          para={
            'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.'
          }
        />
        <Card
          title="Flight Jackets"
          image={ModelsCard5}
          para={
            'Elevate your style with our flight jackets. Crafted for adventure, designed for style'
          }
        />
        <Card
          title="Varsity jackets"
          image={ModelsCard6}
          para={
            "Timeless design meets modern comfort. Discover Conspiracy's varsity jackets collection."
          }
        />
      </div>
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default Home;
