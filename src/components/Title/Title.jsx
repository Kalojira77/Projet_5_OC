import React from 'react';
import './Title.scss';

const Title = ({ children, location = 'Paris, Île-de-France' }) => {
  return (
    <div className="title-container">
      <h1>{children}</h1>
      <p>{location}</p>
    </div>
  );
};

export default Title;
