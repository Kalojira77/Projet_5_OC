import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <main role="main" className="error">
      <h1 className="error__code">404</h1>
      <p className="error__message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error__link">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
};

export default Error404;
