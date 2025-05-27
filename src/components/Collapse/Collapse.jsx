import React, { useState, useId, useRef, useEffect } from 'react';
import Arrow from '../../assets/arrow.svg';
import './Collapse.scss';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const id = useId();
  const contentRef = useRef(null);

  const toggleCollapse = () => setIsOpen(prev => !prev);

  // Mesure et anime la hauteur au changement d'état
  useEffect(() => {
    const contentEl = contentRef.current;

    if (isOpen && contentEl) {
      const contentHeight = contentEl.scrollHeight;
      setHeight(`${contentHeight}px`);

      const timer = setTimeout(() => {
        setHeight('auto'); // Pour les contenus qui peuvent changer ensuite
      }, 600); // durée = celle du CSS

      return () => clearTimeout(timer);
    } else if (contentEl) {
      setHeight(`${contentEl.scrollHeight}px`); // Fixe la hauteur actuelle
      setTimeout(() => {
        setHeight('0px'); // Anime vers 0px
      }, 10);
    }
  }, [isOpen]);

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
          alt={
            isOpen
              ? `Réduire la section ${title}`
              : `Déployer la section ${title}`
          }
          className={`arrow-icon ${isOpen ? 'open' : ''}`}
        />
      </button>

      <div
        id={`collapse-content-${id}`}
        className="collapse-content"
        style={{ height }}
        aria-hidden={!isOpen}
      >
        <div ref={contentRef} className="collapse-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
