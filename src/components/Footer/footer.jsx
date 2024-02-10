import React from 'react';
import './footer.css'; // Import custom footer styles if needed
import Instapic from '../../assets/instagram-pic.png';
import YoutubePic from '../../assets/youtube-pic.png';
import EmailPic from '../../assets/email-pic.png';
import { Link } from 'react-router-dom';

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
          <img
            src={Instapic}
            alt="Insta-pic"
            style={{ height: '50px', width: '50px', objectFit: 'contain' }}
          />
          <Link
            to="https://www.instagram.com/conspiracyug/"
            className="social-link"
            id="social-link1"
            target="_blank"
          >
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
          <img
            src={YoutubePic}
            alt="Youtube-pic"
            style={{ height: '50px', width: '50px', objectFit: 'contain' }}
          />
          <Link
            to="https://youtube.com/conspiracy"
            target="_blank"
            className="social-link"
            id="social-link2"
          >
            <i className="fab fa-youtube"></i> YouTube
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
          <img
            src={EmailPic}
            alt="Email-pic"
            style={{ height: '50px', width: '50px', objectFit: 'contain' }}
          />
          <a
            href="mailto:conspiracy.uganda@gmail.com"
            className="social-link"
            id="social-link3"
          >
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
