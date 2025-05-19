import { useEffect, useState } from "react";

const useFetchAbout = () => {
  const [aboutData, setAboutData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/about.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur de chargement des données About");
        }
        return response.json();
      })
      .then((data) => {
        setAboutData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return { aboutData, isLoading, error };
};

export default useFetchAbout;
