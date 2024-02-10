import React from 'react';
import './Card.css';

function Card(props) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="cardd"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="overlay">
          <span className="check-out-text" style={{ cursor: 'pointer' }}>
            <button style={{ color: 'white', background: 'none' }}>
              Check out
            </button>
          </span>
        </div>
      )}
      <img className="card-img" src={props.image} alt={`${props.image}`} />
      <h2 style={{ color: 'white', marginBottom: '-15px' }}>{props.title}</h2>
      <p style={{ marginLeft: '20px' }}>{props.para}</p>
    </div>
  );
}

export default Card;
