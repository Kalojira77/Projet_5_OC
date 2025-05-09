import React, { useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { LogementContext } from '../context/LogementContext';
import Equipements from '../components/Equipements';
import Tags from '../components/Tags';
import Rating from '../components/Notation';
import Host from '../components/Profil';


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
      <Rating rating={parseInt(logement.rating)} />
      <Host name={logement.host.name} picture={logement.host.picture} />
      <p>{logement.description}</p>
      <Equipements items={logement.equipments} />
      <Tags tags={logement.tags} />
    </div>
  );
};

export default Logement;
