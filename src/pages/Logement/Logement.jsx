import React, { useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { LogementContext } from '../../context/LogementContext';
import { Collapse, Tags, Notation, Host, Galerie, Title } from '../../components';
import './Logement.scss';



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
      <Galerie pictures={logement.pictures} title={logement.title}/>
      <div className='logement-bloc-info'> 
        <div className='logement-bloc-title-tag'>
          <Title>{logement.title}</Title>
          <Tags tags={logement.tags} />
        </div>
        <div className='logement-bloc-profil-note'>
          <Notation rating={parseInt(logement.rating)} />
          <Host name={logement.host.name} picture={logement.host.picture} />
        </div>
      </div>
      <div className='container-collapse'>
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipement) => (
              <li key={`${logement.id}_${equipement}`}>{equipement}</li>
            ))}
          </ul>
        </Collapse>
      </div>
      
    </div>
  );
};

export default Logement;
