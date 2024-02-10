import React from 'react';
import './footer.css'; // Import custom footer styles if needed

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1 className="footer-heading">&copy; Conspiracy UG</h1>
        <p className="footer-text">Uncover the truth</p>
      </div>
      <div className="social-links">
        <a
          href="https://www.instagram.com/conspiracyug/"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a
          href="https://youtube.com/conspiracy"
          target="_blank"
          rel="noreferrer"
          className="social-link"
        >
          <i className="fab fa-youtube"></i> YouTube
        </a>
        <a href="mailto:contact@conspiracy.com" className="social-link">
          <i className="fas fa-envelope"></i> Email us
        </a>
      </div>
    </footer>
  );
}

export default Footer;
