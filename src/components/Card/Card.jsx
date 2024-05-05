import React, { useState, useContext, useEffect } from 'react';
import './Card.css';
import Context from '../../Context/Context';

function Card(props) {
  const ctx = useContext(Context);
  const [hovered, setHovered] = useState(false);
  const [buttonText, setButtonText] = useState('Add to cart'); // State for button text
  const [isFront, setIsFront] = useState(true); // State to track which side of the card is visible

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFront((prevIsFront) => !prevIsFront); // Toggle between front and back
    }, 2000); // Change sides every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const product = {
    title: props.title,
    price: props.price,
    image: props.image.split('/').pop(),
    quantity: 1,
    size: '',
  };

  const handleAddToCart = () => {
    ctx.setAnimateCart(true);
    setTimeout(() => {
      ctx.setAnimateCart(false);
    }, 1000);
    // Parse existing cart items from local storage
    const existingCartItems =
      JSON.parse(localStorage.getItem('CartItems')) || [];

    // Check if the product already exists in the cart
    const existingProductIndex = existingCartItems.findIndex(
      (item) => item.title === product.title
    );

    if (existingProductIndex !== -1) {
      // If the product already exists, update its quantity
      existingCartItems[existingProductIndex].quantity += 1;
    } else {
      // If the product doesn't exist, add it to the cart with quantity 1
      product.quantity = 1;
      existingCartItems.push(product);
    }

    // Save the updated cart items back to local storage
    localStorage.setItem('CartItems', JSON.stringify(existingCartItems));

    setButtonText('Completed'); // Change button text to "Completed"
    setTimeout(() => {
      setButtonText('Add to cart'); // Change button text back to "Add to cart" after a few seconds
    }, 2000); // Change back after 2 seconds (adjust time as needed)
  };

  return (
    <div
      className="cardd"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered ? (
        <div className="overlay">
          <span className="check-out-text" style={{ cursor: 'pointer' }}>
            <button
              style={{ color: 'white', background: 'none' }}
              className="addToCartBTN"
              onClick={handleAddToCart} // Call handleAddToCart function on click
            >
              {buttonText} {/* Display dynamic button text */}
            </button>
          </span>
        </div>
      ) : (
        ''
      )}
      {isFront ? (
        <img className="card-img" src={props.image} alt={props.image} />
      ) : (
        <img
          className="card-img-back"
          src={props.hoverPic}
          alt={props.hoverPic}
        />
      )}
      <h2 style={{ color: 'white', marginBottom: '-15px', marginLeft: '20px' }}>
        {props.title}: {`${props.price.toLocaleString('en-US')} UGX`}
      </h2>
      <p style={{ marginLeft: '20px' }}>{props.para}</p>
    </div>
  );
}

export default Card;
