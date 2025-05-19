import React, { useContext } from 'react';
import { LogementContext } from '../../context/LogementContext';
import { Banner, Card } from '../../components';
import './Home.scss';

const Home = () => {
  const { logements, isLoading, error } = useContext(LogementContext);

  if (isLoading) return <p>Chargement en cours...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <main className="home">
      <Banner home />
      <section className="card-container" aria-label="Liste des logements">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
            id={logement.id}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
