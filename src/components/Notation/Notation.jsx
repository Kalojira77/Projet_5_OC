import React from 'react';
import fullStar from '../../assets/star-full.svg';
import emptyStar from '../../assets/star-empty.svg';

function Rating({ rating }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        key={i}
        src={i <= rating ? fullStar : emptyStar}
        alt={i <= rating ? 'Étoile pleine' : 'Étoile vide'}
        className="star"
      />
    );
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;