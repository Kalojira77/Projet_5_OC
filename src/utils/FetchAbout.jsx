import { useEffect, useState } from "react";

const useFetchAbout = () => {
  const [aboutData, setAboutData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("Projet_5_OC/public/data/about.json");

        if (!response.ok) {
          throw new Error("Erreur de chargement des données About");
        }

        const data = await response.json();
        setAboutData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false); 
      }
    };

    fetchData();
  }, []);

  return { aboutData, isLoading, error };
};

export default useFetchAbout;
