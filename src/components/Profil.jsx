import React from 'react';

function Host({ name, picture }) {
  return (
    <div className="host">
      <p className="host-name">{name}</p>
      <img src={picture} alt={`Portrait de ${name}`} className="host-picture" />
    </div>
  );
}

export default Host;