import React, { useEffect } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import DOTI_BACK from '/src/assets/DOTI.jpeg';
import DOTI_FRONT from '/src/assets/DOTI-front.jpg';
import Hope from '/src/assets/Hope.jpeg';
import HopeFront from '/src/assets/Hope-Front.jpeg';
import Reckless from '/src/assets/Reckless.jpeg';
import RecklessFront from '/src/assets/Reckless-front.jpeg';
import Footer from '../../components/Footer/footer';
import ScrollDownButton from '../../components/ScrollDownButton/ScrollDownButton.jsx';

function Home() {
  useEffect(() => {
    if (!localStorage.getItem('CartItems')) {
      localStorage.setItem('CartItems', '[]');
    }

    // Check if the screen width is greater than 12 inches (1200 pixels)
    if (window.innerWidth > 900) {
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        const modelsPic = document.querySelector('.models-pic');
        modelsPic.style.backgroundPositionY = `${scrollTop * 0.5}px`; // Adjust the parallax effect speed as needed
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);
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

  // const products = [
  //   {
  //     title: 'T-Shirts',
  //     para: 'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.',
  //     price: '35,000 UGX',
  //   },
  //   {
  //     title: 'T-Shirts',
  //     para: 'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.',
  //     price: '35,000 UGX',
  //   },
  //   {
  //     title: 'T-Shirts',
  //     para: 'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.',
  //     price: '35,000 UGX',
  //   },
  //   {
  //     title: 'T-Shirts',
  //     para: 'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.',
  //     price: '35,000 UGX',
  //   },
  //   {
  //     title: 'T-Shirts',
  //     para: 'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.',
  //     price: '35,000 UGX',
  //   },
  //   {
  //     title: 'T-Shirts',
  //     para: 'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.',
  //     price: '35,000 UGX',
  //   },
  //   {
  //     title: 'T-Shirts',
  //     para: 'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.',
  //     price: '35,000 UGX',
  //   },
  //   {
  //     title: 'T-Shirts',
  //     para: 'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.',
  //     price: '35,000 UGX',
  //   },
  //   {
  //     title: 'T-Shirts',
  //     para: 'Step into style with our chic T-shirts. Discover our trendy T-shirts, crafted for comfort and style.',
  //     price: '35,000 UGX',
  //   },
  // ];

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
      <Header /> <div className="models-pic" />
      <ScrollDownButton />
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
          <br />
          Tap the images to add to them cart
        </p>
      </div>
      <div className="cardDiv">
        <Card
          title="Reckless"
          image={Reckless}
          hoverPic={RecklessFront}
          // hoverPic={Reckless}
          // image={ModelsCard3}
          para={
            'Rock the edge! Our fashion screams rebellion. Break the mold, flaunt your style.'
          }
          price={38000}
        />
        <Card
          title="Hope"
          image={Hope}
          hoverPic={HopeFront}
          // image={ModelsCard1}
          para={
            "Hope. A delicate thread in life's tapestry. Weaving dreams into reality with timeless grace."
          }
          price={38000}
        />
        <Card
          title="Overthink"
          image={DOTI_BACK}
          hoverPic={DOTI_FRONT}
          para={
            "Don't Over Think It. Stay stylish, keep your look effortlessly cool and your mind at ease."
          }
          price={38000}
        />
      </div>
      {/* <button style={{ backgroundColor: 'green', borderRadius: '25px' }}> */}
      {/* </button> */}
      <Footer />
    </div>
  );
}

export default Home;
