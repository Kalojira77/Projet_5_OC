import React from 'react';
import { Banner, Collapse } from '../../components';
import useFetchAbout from "../../utils/FetchAbout";

const About = () => {
  const { aboutData, isLoading, error } = useFetchAbout();

  return (
    <main className="about">
      <Banner page="about" />

      {isLoading && <p className="loading">Chargement des données...</p>}
      {error && <p className="error">Erreur : {error}</p>}
      {!isLoading && !error && aboutData.length === 0 && (
        <p className="no-data">Aucune information à afficher.</p>
      )}

      {!isLoading && !error && aboutData.map((item) => (
        <Collapse key={item.title} title={item.title}>
          {item.content}
        </Collapse>
      ))}
    </main>
  );
};

export default About;