import React from 'react';
import './About.css';
import Header from '../../components/Header/Header';

function About() {
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
    </div>
  );
}

export default About;
