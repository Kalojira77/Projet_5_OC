import React from 'react';
import Banner from '../components/Banner';
import bannerAbout from '../assets/banner-about.jpg'; 

function About() {
  return (
    <div>
      <Banner image={bannerAbout} text="Pump it up ! On met un texte ici parce que ça fait plaisir. Voila. Holé !"/>
      <h1>À propos</h1>
    </div> 
  );
}

export default About;