import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss';

const Error404 = () => {
  return (
    <main role="main" className="error">
      <h1 className="error__code">404</h1>
      <p className="error__message">
        <span>Oups ! La page que</span>
        <span>vous demandez n'existe pas.</span>
      </p>
      <Link to="/" className="error__link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
};

export default Error404;
