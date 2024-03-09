import React from 'react';
import './About.css';
import Header from '../../components/Header/Header';
import Image1 from '../../assets/card-image5.png';
import Image2 from '../../assets/card-image4.png';
import Image3 from '../../assets/card-image3.png';
import Image4 from '../../assets/riya-giveaway.png';
import Image8 from '../../assets/card-image6.png';
import Image6 from '../../assets/card-image7.png';

function About() {
  return (
    <div className="about-container">
      <Header />
      <div className="image-grid">
        <div className="image-container">
          <img src={Image1} alt="Clothing" className="tilted-image" />
          <div className="overlayy">
            <p>Summer Collection</p>
          </div>
        </div>
        <div className="image-container">
          <img src={Image2} alt="Clothing" className="tilted-image" />
          <div className="overlayy">
            <p>New Arrivals</p>
          </div>
        </div>
        <div className="image-container">
          <img src={Image3} alt="Clothing" className="tilted-image" />
          <div className="overlayy">
            <p>Trendy Designs</p>
          </div>
        </div>
        <div className="image-container">
          <img src={Image4} alt="Clothing" className="tilted-image" />
          <div className="overlayy">
            <p>Limited Edition</p>
          </div>
        </div>
        <div className="image-container">
          <img src={Image8} alt="Clothing" className="tilted-image" />
          <div className="overlayy">
            <p>Fall Collection</p>
          </div>
        </div>
        <div className="image-container">
          <img src={Image6} alt="Clothing" className="tilted-image" />
          <div className="overlayy">
            <p>Winter Styles</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
