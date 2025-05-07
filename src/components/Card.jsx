import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ id, title, cover }) => {
  return (
    <div className="card">
      <Link to={`/logement/${id}`}>
        <img src={cover} alt={title} className="card-img" />
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

export default Card;