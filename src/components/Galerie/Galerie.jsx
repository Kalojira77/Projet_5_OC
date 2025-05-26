import React, { useState } from 'react';
import './Galerie.scss';

const Carousel = ({ pictures, title }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const total = pictures.length || 0;

      if (!pictures || pictures.length === 0) {
    return <p className="carousel__empty">Aucune image disponible</p>;
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % total);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + total) % total);
  };

  return (
    <div className="carousel">
      {total > 1 && (
        <button className="carousel__arrow carousel__arrow--left" onClick={prevSlide} aria-label='Image précédente'>
          ‹
        </button>
      )}
      <div className="carousel__image-container">
        <img
            src={pictures[currentIndex]}
            alt={`Image ${currentIndex + 1} sur ${total} du logement ${title}`}
            className="carousel__image"
        />
      </div>
      {total > 1 && (
        <button className="carousel__arrow carousel__arrow--right" onClick={nextSlide} aria-label='Image suivante'>
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
