// client/src/components/FeaturedSection.jsx

import React from 'react';
import FeaturedCard from './FeaturedCard';
import '../App.css'; // Asegúrate de que los estilos están aquí

const FeaturedSection = ({ featuredItems }) => {
    return (
        <div className="featured-section-container">
            <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>⭐ Destacados</h2>
            <div className="featured-grid">
                {featuredItems.map(item => (
                    <FeaturedCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedSection;