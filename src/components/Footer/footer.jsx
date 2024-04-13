import React from 'react';
import './footer.css'; // Import custom footer styles if needed

import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import { PiYoutubeLogoLight } from 'react-icons/pi';

function Footer() {
  const year = new Date(Date.now()).getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1 className="footer-heading">&copy; Conspiracy UG</h1>
        <p className="footer-text">Uncover the truth, wear Conspiracy</p>
      </div>
      <div className="social-links">
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
          className="footer-social-div"
        >
          <Link
            to="https://www.instagram.com/conspiracyug/"
            className="social-link"
            id="social-link1"
            target="_blank"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <FaInstagram style={{ height: '35px', width: '35px' }} />
            <i className="fab fa-instagram"></i> Instagram
          </Link>
        </div>

        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
          className="footer-social-div"
        >
          {/* <Link
            to="https://youtube.com/conspiracy"
            target="_blank"
            className="social-link"
            id="social-link2"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <PiYoutubeLogoLight style={{ height: '40px', width: '40px' }} />
            <i className="fab fa-youtube"></i> YouTube
          </Link> */}
        </div>
        <div
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
          className="footer-social-div"
        >
          <a
            href="mailto:conspiracy.uganda@gmail.com"
            className="social-link"
            id="social-link3"
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <MdOutlineEmail style={{ height: '40px', width: '40px' }} />
            <i className="fas fa-envelope"></i> Email us
          </a>
        </div>
      </div>
      <h3 style={{ fontSize: '18px' }}>
        Copyright &copy; {year} Conspiracy UG. All Rights Reserved
      </h3>
    </footer>
  );
}

export default Footer;
