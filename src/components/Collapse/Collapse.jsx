import React, { useState, useId } from 'react';
import Arrow from '../../assets/arrow.svg';
import './Collapse.scss';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const id = useId();

  const toggleCollapse = () => setIsOpen(prev => !prev);

  return (
    <div className="collapse">
      <button
        type="button"
        className="collapse-header"
        onClick={toggleCollapse}
        aria-expanded={isOpen}
        aria-controls={`collapse-content-${id}`}
      >
        <span className="collapse-title">{title}</span>
        <img
          src={Arrow}
          alt={isOpen ? `Réduire la section ${title}` : `Déployer la section ${title}`}
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
