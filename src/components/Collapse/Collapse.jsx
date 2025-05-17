import React, { useState, useId } from 'react';
import Arrow from '../../assets/arrow.svg';
import './Collapse.scss';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();  // génère un id stable unique pour cette instance

  const toggleCollapse = () => setIsOpen(prev => !prev);

  return (
    <div className="collapse">
      <button
        className="collapse-header"
        onClick={toggleCollapse}
        aria-expanded={isOpen}
        aria-controls={`collapse-content-${id}`}
      >
        <h2>{title}</h2>
        <img
          src={Arrow}
          alt={isOpen ? 'Fermer' : 'Ouvrir'}
          className={`arrow-icon ${isOpen ? 'open' : ''}`}
        />
      </button>
      <div
        id={`collapse-content-${id}`}
        className="collapse-content"
        hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
};

export default Collapse;
