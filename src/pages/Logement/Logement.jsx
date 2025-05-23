import React, { useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { LogementContext } from '../../context/LogementContext';
import { Collapse, Tags, Notation, Profil, Galerie } from '../../components';



const Logement = () => {
  const { id } = useParams();
  const { logements, isLoading, error } = useContext(LogementContext);

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const logement = logements.find((item) => item.id === id);

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
          {logement.equipments.map((equipement) => (
            <li key={`${logement.id}-${equipement}`}>{equipement}</li>
          ))}
        </ul>
      </Collapse>
      <Tags tags={logement.tags} />
    </div>
  );
};

export default Logement;
