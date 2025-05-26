import React, { useState, useId, useRef, useEffect } from "react";
import Arrow from "../../assets/arrow.svg";
import "./Collapse.scss";

const Collapse = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [height, setHeight] = useState("0px");
    const id = useId();
    const contentRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            const contentHeight = contentRef.current.offsetHeight;
            setHeight(`${contentHeight}px`);

            // Après l'animation, on remet en auto pour le contenu dynamique
            const timer = setTimeout(() => {
                setHeight("auto");
            }, 300); // Correspond à la durée de l'animation CSS

            return () => clearTimeout(timer);
        } else {
            // On force d'abord la hauteur exacte avant de l'animer vers 0
            if (contentRef.current) {
                setHeight(`${contentRef.current.offsetHeight}px`);
                setTimeout(() => {
                    setHeight("0px");
                }, 10);
            }
        }
    }, [isOpen]);

    const toggleCollapse = () => setIsOpen((prev) => !prev);

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
                    className={`arrow-icon ${isOpen ? "open" : ""}`}
                />
            </button>
            <div
                id={`collapse-content-${id}`}
                className="collapse-content"
                style={{ height: height }}
            >
                <div ref={contentRef} className="collapse-content-inner">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Collapse;