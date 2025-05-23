import React, { createContext, useState, useEffect } from 'react';
import { fetchLogements } from '../utils/FetchLogements';

export const LogementContext = createContext();

export const LogementProvider = ({ children }) => {
  const [logements, setLogements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadLogements = async () => {
      try {
        const logementsData = await fetchLogements();
        setLogements(logementsData);
      } catch (err) {
        console.error(err);
        setError('Erreur lors du chargement des logements');
      } finally {
        setIsLoading(false);
      }
    };

    loadLogements();
  }, []);

  return (
    <LogementContext.Provider value={{ logements, isLoading, error }}>
      {children}
    </LogementContext.Provider>
  );
};
