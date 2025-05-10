import React from 'react';
// import './Banner.css';
import homeImage from '../../assets/banner-home.jpg';
import aboutImage from '../../assets/banner-about.jpg';

function Banner({ home = false, about = false }) {
  let image = '';
  let text = '';

  if (home) {
    image = homeImage;
    text = 'Chez vous, partout et ailleurs';
  } else if (about) {
    image = aboutImage;
    text = "Ceci n'est pas un texte";
  } else {
    image = homeImage;
    text = '';
  }

  return (
    <div className="banner" style={{ backgroundImage: `url(${image})` }}>
      {text && <h1 className="banner-text">{text}</h1>}
    </div>
  );
}

export default Banner;
