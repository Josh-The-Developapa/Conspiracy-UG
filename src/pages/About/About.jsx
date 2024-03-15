import React from 'react';
import './About.css';
import Header from '../../components/Header/Header';
import Image1 from '../../assets/card-image5.png';
import Image2 from '../../assets/card-image4.png';
import Image3 from '../../assets/card-image3.png';
import Image4 from '../../assets/riya-giveaway.png';
import Image8 from '../../assets/card-image6.png';
import Image6 from '../../assets/card-image7.png';
import Image9 from '../../assets/card-image3.webp';
import Image10 from '../../assets/card-image2.webp';
import Footer from '../../components/Footer/footer';

const About = () => {
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
      <div className="image-grid1">
        <div className="image-container1">
          <img
            src={Image1}
            alt="Clothing"
            className="tilted-image1"
            style={{ zIndex: 1, height: '500px' }}
          />
          <div className="overlay1">
            <p>Summer Collection</p>
          </div>
        </div>
        <div className="image-container1">
          <img
            src={Image2}
            alt="Clothing"
            className="tilted-image1"
            style={{ zIndex: 2, height: '500px' }}
          />
          <div className="overlay1">
            <p>New Arrivals</p>
          </div>
        </div>
        <div className="image-container1">
          <img
            src={Image3}
            alt="Clothing"
            className="tilted-image1"
            style={{ zIndex: 3, height: '500px' }}
          />
          <div className="overlay1">
            <p>Trendy Designs</p>
          </div>
        </div>
        <div className="image-container1">
          <img
            src={Image4}
            alt="Clothing"
            className="tilted-image1"
            style={{ zIndex: 4, height: '500px' }}
          />
          <div className="overlay1">
            <p>Limited Edition</p>
          </div>
        </div>
        <div className="image-container1">
          <img
            src={Image8}
            alt="Clothing"
            className="tilted-image1"
            style={{ zIndex: 5, height: '500px' }}
          />
          <div className="overlay1">
            <p>Fall Collection</p>
          </div>
        </div>
        <div className="image-container1">
          <img
            src={Image6}
            alt="Clothing"
            className="tilted-image1"
            style={{ zIndex: 6, height: '500px' }}
          />
          <div className="overlay1">
            <p>Winter Styles</p>
          </div>
        </div>
        <div className="image-container1">
          <img
            src={Image9}
            alt="Clothing"
            className="tilted-image1"
            style={{ zIndex: 6, height: '500px' }}
          />
          <div className="overlay1">
            <p>Winter Styles</p>
          </div>
        </div>
        <div className="image-container1">
          <img
            src={Image10}
            alt="Clothing"
            className="tilted-image1"
            style={{ zIndex: 6, height: '500px' }}
          />
          <div className="overlay1">
            <p>Winter Styles</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
