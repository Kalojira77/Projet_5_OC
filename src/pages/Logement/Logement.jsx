// import React, { useContext } from 'react';
// import { useParams, Navigate } from 'react-router-dom';
// import { LogementContext } from '../../context/LogementContext';
// import Equipements from '../../components/Equipements/indexo';
// import Tags from '../../components/Tags/indexo';
// import Rating from '../../components/Notation/indexo';
// import Host from '../../components/Profil/indexo';
// import Carousel from '../../components/Galerie/indexo';

import React, { useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { LogementContext } from '../../context/LogementContext';
import { Collapse, Tags, Notation, Profil, Galerie } from '../../components';



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
      <Galerie pictures={logement.pictures} title={logement.title}/>
      <Notation rating={parseInt(logement.rating)} />
      <Profil name={logement.host.name} picture={logement.host.picture} />

      <Collapse title="Description">
        <p>{logement.description}</p>
      </Collapse>
      <Collapse title="Équipements">
        <ul>
          {logement.equipments.map((equipement, index) => (
            <li key={index}>{equipement}</li>
          ))}
        </ul>
      </Collapse>


      {/* <p>{logement.description}</p>
      <Equipements items={logement.equipments} /> */}
      <Tags tags={logement.tags} />
    </div>
  );
};

export default Logement;
