import React from 'react';
import './About.css';
import Header from '../../components/Header/Header';
import Image1 from '../../assets/card-image5.png';
import Image2 from '../../assets/card-image4.png';
import Image3 from '../../assets/card-image3.png';
import Image4 from '../../assets/riya-giveaway.png';
import Image8 from '../../assets/card-image6.png';
import Image6 from '../../assets/card-image7.png';
import Image11 from '../../assets/Hullabaloo.jpg';
import Footer from '../../components/Footer/footer';
import ScrollDownButton from '../../components/ScrollDownButton/ScrollDownButton.jsx';

const About = () => {
  return (
    <div className="about-page-container">
      <Header />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '10px',
          marginRight: '10px',
          marginTop: '60px',
        }}
      >
        <h2 style={{ marginLeft: '15px', marginRight: '15px' }}>
          <b>Tap the images below for details</b>
        </h2>
      </div>
      <ScrollDownButton />
      <div
        className="image-container1"
        style={{ width: '100vw', cursor: 'pointer' }}
      >
        <img
          src={Image11}
          alt="Clothing"
          className="tilted-image1"
          style={{ zIndex: 1, height: '550px' }}
        />
        <div className="overlay1">
          <h2>Our Team</h2>
          <p>
            Take a look at all the players, managers, executives that bring you
            the Hungry Hooligans Hoofball Hullabaloo Lunch Time League
            {/* <br />
            <br />
            Faizan Yousuf, Keon Walusimbi, Lionel Agaba, Bilal Ahmed, Sanyam
            Singhvi, Felix Jonker, Patrice Owachi, Timothy Kitaaka. */}
          </p>
        </div>
      </div>
      <div className="image-grid1">
        <div className="image-container1">
          <img
            src={Image1}
            alt="Clothing"
            className="tilted-image1"
            style={{ zIndex: 1, height: '500px' }}
          />
          <div className="overlay1">
            <h2>Summer Collection</h2>
            <p>
              Take a look at our awesome team, from models to top level
              shareholders, all working together to bring forth conspiracy
            </p>
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
            <h2>New Arrivals</h2>
            <p>
              Take a look at our awesome team, from models to top level
              shareholders, all working together to bring forth conspiracy
            </p>
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
            <h2>Trendy Designs</h2>
            <p>
              Take a look at our awesome team, from models to top level
              shareholders, all working together to bring forth conspiracy
            </p>
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
            <h2>Limited Edition</h2>
            <p>
              Take a look at our awesome team, from models to top level
              shareholders, all working together to bring forth conspiracy
            </p>
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
            <h2>Fall Collection</h2>
            <p>
              Take a look at our awesome team, from models to top level
              shareholders, all working together to bring forth conspiracy
            </p>
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
            <h2>Winter Styles</h2>
            <p>
              Take a look at our awesome team, from models to top level
              shareholders, all working together to bring forth conspiracy
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
