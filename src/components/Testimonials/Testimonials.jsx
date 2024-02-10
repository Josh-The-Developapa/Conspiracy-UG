import React, { useState } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO, Company Inc.',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non ante a velit rutrum fringilla.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Designer',
    message:
      'Praesent suscipit augue quis libero semper, vitae suscipit quam eleifend. Sed vestibulum sapien quis turpis rhoncus.',
  },
  {
    id: 3,
    name: 'David Brown',
    title: 'Developer',
    message:
      'Integer tempor mi vel est gravida, quis fringilla dolor finibus. Curabitur nec feugiat urna.',
  },
];

function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonialsData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonialsData.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="testimonials">
      <h2 className="testimonials-heading">Testimonials</h2>
      <div className="testimonials-carousel">
        <button className="prev-btn" onClick={prevSlide}>
          &#10094;
        </button>
        {testimonialsData.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial ${index === currentSlide ? 'active' : ''}`}
          >
            <p className="testimonial-message">{testimonial.message}</p>
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-title">{testimonial.title}</p>
          </div>
        ))}
        <button className="next-btn" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
