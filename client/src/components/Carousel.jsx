// client/src/components/Carousel.jsx

import React, { useState, useEffect, useCallback } from 'react';
import '../App.css';

// 💥 CORRECCIÓN: Volvemos a las rutas originales.
// Vite se encargará de agregar el prefijo /ECOMMERCE-FINAL-V3/
// automáticamente durante el build.
import carrusel1 from '/images/carrusel1.jpeg'; 
import carrusel2 from '/images/carrusel2.jpeg';
import carrusel3 from '/images/carrusel3.jpeg';

const carouselData = [
  { id: 1, image: carrusel1, alt: "Carrusel 1" },
  { id: 2, image: carrusel2, alt: "Carrusel 2" },
  { id: 3, image: carrusel3, alt: "Carrusel 3" },
];

const Carousel = () => {
  // ... (el resto del código del carrusel queda exactamente igual)
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselSize = carouselData.length;

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev === carouselSize - 1 ? 0 : prev + 1));
  }, [carouselSize]);

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselSize - 1 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return (
    <>
      <h2 className="carousel-title">PRODUCTOS DESTACADOS</h2>
      <div className="carousel-container">
        <div 
          className="carousel-slide" 
          style={{ 
            transform: `translateX(-${currentSlide * 100}%)`,
            width: `${carouselSize * 100}%`
          }}
        >
          {carouselData.map((item) => (
            <div key={item.id} className="carousel-item">
              <img src={item.image} alt={item.alt} />
            </div>
          ))}
        </div>
        <button className="carousel-button prev" onClick={goToPrev}>{'<'}</button>
        <button className="carousel-button next" onClick={goToNext}>{'>'}</button>
      </div>
    </>
  );
};

export default Carousel;