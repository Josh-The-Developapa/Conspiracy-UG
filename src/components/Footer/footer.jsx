import React from 'react';
// import InstaPic from '../../assets/instagram-pic.png';
// import EmailPic from '../../assets/email-pic.png';

import { NavLink } from 'react-router-dom';

function Footer() {
  // Styles
  const footerStyles = {
    background: '#000000',
    color: 'white',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // paddingTop: '100px',
    // marginTop: '50px',
  };

  const contentStyles = {
    maxWidth: '1000px',
    // margin: '0',
    // display: 'flex',
    // flexDirection: 'row',
    // width: '100%',
  };

  const headingStyles = {
    fontSize: '36px',
    marginBottom: '-10px',
  };

  const textStyles = {
    fontSize: '18px',
    marginBottom: '-5px',
    maxWidth: '700px',
  };

  const socialStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const iconStyles = {
    marginRight: '10px',
  };

  const linkStyles = {
    fontSize: '20px',
    textDecoration: 'none',
    color: 'white',
  };

  const footerBottomStyles = {
    textAlign: 'left',
    marginTop: '20px',
  };
  return (
    <footer style={footerStyles}>
      <div style={contentStyles}>
        {/* <img
          src={Joshua}
          alt="JMuks"
          style={{
            height: '250px',
            borderRadius: '150px',
            transform: 'rotate(28deg)',
          }}
        /> */}
        <h1 style={headingStyles}> &copy; Conspiracy UG</h1>
        <p style={textStyles}>*Conspiracy motto goes here*</p>
      </div>
      <div style={socialStyles}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* <img src={InstaPic} alt="Insta-icon" style={iconStyles} /> */}
          <a
            href="https://youtube.com/channel/UCI9hvu4GkGLKyOZFenvcvoA"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <h2 style={linkStyles}>Instagram</h2>
          </a>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* <img src={InstaPic} alt="Youtube-icon" style={iconStyles} /> */}
          <a
            href="https://youtube.com/channel/UCI9hvu4GkGLKyOZFenvcvoA"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <h2 style={linkStyles}>WhatsApp</h2>
          </a>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '5px',
          }}
        >
          {/* <img src={EmailPic} alt="Email-icon" style={iconStyles} /> */}
          <a
            href="mailto:voteable123@gmail.com"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <h2 style={linkStyles}>Email us</h2>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
