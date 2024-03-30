import React, { useState, useEffect } from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';
import './ScrollDownButton.css';

function ScrollDownButton() {
  const [visible, setVisible] = useState(true);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const scrollThreshold = window.innerHeight * 0.5; // Adjust the multiplier as needed
    if (scrolled > scrollThreshold) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: 705,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <div>
      {visible && (
        <FaArrowCircleDown className="scrollDownBtn" onClick={scrollToBottom} />
      )}
    </div>
  );
}

export default ScrollDownButton;
