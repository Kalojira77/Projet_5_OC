import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ id, title, cover }) => {
  return (
    <article className="card">
      <Link to={`/logement/${id}`} aria-label={`Voir le logement : ${title}`}>
        <img src={cover} alt={`Image du logement : ${title}`} className="card-img" />
        <div className="card-title">
          <h2>{title}</h2>
        </div>
      </Link>
    </article>
  );
};

export default Card;
