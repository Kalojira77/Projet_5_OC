import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const Card = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`} aria-label={`Voir le logement : ${title}`} className="card">
    <article>
        <img src={cover} alt={`Image du logement : ${title}`} className="card-img" />
        <div className="card-title">
          <h2>{title}</h2>
        </div>
    </article>
     </Link>
  );
};

export default Card;
