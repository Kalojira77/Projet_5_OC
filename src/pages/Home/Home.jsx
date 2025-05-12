import React, { useContext } from 'react';
import { LogementContext } from '../../context/LogementContext';
import { Banner, Card } from '../../components'


const Home = () => {
  const { logements, isLoading, error } = useContext(LogementContext);

  if (isLoading) {
    return <div>Chargement en cours...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Banner home />
      <h1>Page d'accueil</h1>
      <div className="card-container">
        {logements.map(logement => (
          <Card
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
            id={logement.id}
          />
        ))}
      </div>
    </div>
  )
}

export default Home