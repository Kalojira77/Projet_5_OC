import React, { createContext, useState, useEffect } from 'react';
import { fetchLogements } from '../utils/FetchLogements';

// Création du contexte
export const LogementContext = createContext();

// Provider du contexte
export const LogementProvider = ({ children }) => {
  const [logements, setLogements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchLogements()
      .then((data) => {
        setLogements(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Erreur lors du chargement des logements');
        setIsLoading(false);
      });
  }, []);

  return (
    <LogementContext.Provider value={{ logements, isLoading, error }}>
      {children}
    </LogementContext.Provider>
  );
};
