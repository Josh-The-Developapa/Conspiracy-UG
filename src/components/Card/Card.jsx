import React from 'react';
import './Card.css';

function Card(props) {
  return (
    <div className="cardd">
      <img className="card-img" src={props.image} alt={`${props.image}`} />
      <h2 style={{ color: 'white' }}>{props.title}</h2>
      <p>{props.para}</p>
    </div>
  );
}

export default Card;
