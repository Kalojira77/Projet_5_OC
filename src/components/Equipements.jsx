import React from 'react';

function Equipements({ items }) {
  return (
    <div className="equipements">
      <h2>Équipements</h2>
      <ul>
        {items.map((equipment, index) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
    </div>
  );
}

export default Equipements;