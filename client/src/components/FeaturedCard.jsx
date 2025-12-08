// client/src/components/FeaturedCard.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const FeaturedCard = ({ item }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % item.images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? item.images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="featured-card">
            {/* --- CARRUSEL DENTRO DE LA TARJETA --- */}
            <div className="featured-carousel">
                <img 
                    src={item.images[currentIndex]} 
                    alt={item.title} 
                    className="featured-image"
                />
                
                {/* Botones de navegación del carrusel */}
                {item.images.length > 1 && (
                    <>
                        <button className="carousel-prev" onClick={prevImage}>&#10094;</button>
                        <button className="carousel-next" onClick={nextImage}>&#10095;</button>
                    </>
                )}
            </div>

            {/* --- INFORMACIÓN Y LINK --- */}
            <div className="featured-info">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
                
                {/* El botón de Ver Más que enlaza a la sección completa */}
                <Link to={item.link} className="ver-mas-button">
                    Ver Más
                </Link>
            </div>
        </div>
    );
};

export default FeaturedCard;