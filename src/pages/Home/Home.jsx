import React from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Models from '../../assets/Models.png';
import Card from '../../components/Card/Card';
import ModelsCard1 from '../../assets/ModelsCard1.jpg';
import ModelsCard2 from '../../assets/ModelsCard2.jpeg';
import ModelsCard3 from '../../assets/ModelsCard3.jpg';
import Footer from '../../components/Footer/footer';

function Home() {
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
      <img
        src={Models}
        alt="Models-Pic"
        style={{
          width: '100vw',
          // height: '500px',
          objectFit: 'contain',
          marginTop: '85px',
          // position: 'relative',
        }}
      />
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
          title="Lorem ipsum"
          image={ModelsCard1}
          para={'Lorem ipsum doler salt otor kema huryian haksol'}
        />
        <Card
          title="Lorem ipsum"
          image={ModelsCard2}
          para={'Lorem ipsum doler salt otor kema huryian haksol'}
        />
        <Card
          title="Lorem ipsum"
          image={ModelsCard3}
          para={'Lorem ipsum doler salt otor kema huryian haksol'}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
