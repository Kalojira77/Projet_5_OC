import React from 'react';

function Host({ name, picture }) {
  return (
    <article className="host">
      <p className="host-name">{name}</p>
      <img src={picture} alt='' className="host-picture" role="img"
        aria-label={`Portrait de ${name}`}/>
    </article>
  );
}

export default Host;