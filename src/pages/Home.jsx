import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import Card from '../components/Card'
import bannerHome from '../assets/banner-home.jpg'

const Home = () => {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    const fetchLogements = async () => {
      try {
        const response = await fetch('/data/logements.json')
        const data = await response.json()
        setLogements(data)
      } catch (error) {
        console.error('Erreur de chargement des données :', error)
      }
    }

    fetchLogements()
  }, [])

  return (
    <div>
      <Banner image={bannerHome} text="Chez vous, partout et ailleurs" />
      <h1>Page d'accueil</h1>
      <div className="card-container">
        {logements.map(logement => (
          <Card
            key={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  )
}

export default Home