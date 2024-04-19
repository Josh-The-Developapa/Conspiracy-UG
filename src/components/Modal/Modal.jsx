import React, { useContext } from 'react';
import './Modal.css';
import Context from '../../Context/Context';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

function Modal() {
  const ctx = useContext(Context);

  return (
    <div className="modal-container">
      <div className="modalBG" onClick={() => ctx.setContactCard(false)} />
      <div className="modal">
        <div className="modal-header">
          <h3 className="modal-title">Contact Us</h3>
          <IoClose
            className="close-btn"
            onClick={() => ctx.setContactCard(false)}
          />
        </div>
        <p
          style={{ color: '#000000', marginLeft: '10px', marginRight: '10px' }}
        >
          Hello, Feel free to contact the members of the Conspiracy Brand using
          the contact details below. We're here to help!
        </p>
        <div className="modal-content" style={{ maxHeight: '500px' }}>
          <div className="contact-item1">
            <Link
              to="https://www.instagram.com/conspiracyug/"
              target="_blank"
              className="contact-link"
              style={{ color: '#cd23d5' }}
            >
              <FaInstagram className="icon" />
              ConspiracyUG
            </Link>
          </div>
          <div className="contact-item2">
            <a
              href="mailto:conspiracy.uganda@gmail.com"
              className="contact-link"
              style={{ color: '#006e9a' }}
            >
              <MdOutlineEmail className="icon" />
              conspiracy.uganda@gmail.com
            </a>
          </div>
          {/* <p style={{ color: '#000000' }}>
            If you're interested in having your own website, and would like to
            get in touch with the developer of this website, Joshua Mukisa, you
            can find his details below:
          </p>
          <a
            href="mailto:kiryowajoshua22@gmail.com"
            className="contact-link"
            style={{ color: '#006f18' }}
          >
            <MdOutlineEmail className="icon" />
            kiryowajoshua22@gmai.com
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Modal;
