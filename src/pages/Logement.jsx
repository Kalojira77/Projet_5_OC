import React, { useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { LogementContext } from '../context/LogementContext';

const Logement = () => {
  const { id } = useParams();
  const { logements, isLoading, error } = useContext(LogementContext);

  console.log("ID du logement :", id);  // Vérifier l'ID dans l'URL
  console.log("Liste des logements :", logements);  // Vérifier les logements récupérés

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Trouver le logement qui correspond à l'ID
  const logement = logements.find((item) => item.id === id);

  // Si pas trouvé, rediriger vers la page d'erreur
  if (!logement) {
    return <Navigate to="/error" />;
  }

  return (
    <div className="logement-page">
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>

      {/* Liste des équipements */}
      <div className="equipements">
        <h2>Équipements</h2>
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </div>

      {/* Tags du logement */}
      <div className="tags">
        {logement.tags.map((tag, index) => (
          <span key={index} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Logement;
