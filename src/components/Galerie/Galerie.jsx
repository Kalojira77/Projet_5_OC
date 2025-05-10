// src/components/Carousel.jsx
import React, { useState } from 'react';
// import './Carousel.scss';

const Carousel = ({ pictures, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  return (
    <div className="carousel">
      {total > 1 && (
        <button className="carousel__arrow carousel__arrow--left" onClick={prevSlide}>
          ‹
        </button>
      )}
      <div className="carousel__image-container">
        <img
            src={pictures[currentIndex]}
            alt={`${title}`}
            className="carousel__image"
        />
      </div>
      {total > 1 && (
        <button className="carousel__arrow carousel__arrow--right" onClick={nextSlide}>
          ›
        </button>
      )}
      {total > 1 && (
        <div className="carousel__counter">
          {currentIndex + 1} / {total}
        </div>
      )}
    </div>
  );
};

export default Carousel;
