export async function fetchLogements() {
    try {
      const response = await fetch('Projet_5_OC/public/data/logements.json');
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des logements');
      }
      const logementsData = await response.json();
      return logementsData;
    } catch (error) {
      console.error('Erreur fetchLogements :', error);
      throw error;
    }
  }