// client/src/components/Carousel.jsx

import React, { useState, useEffect, useCallback } from 'react';
import '../App.css';
// 💥 FIX DEFINITIVO: Todas las importaciones de assets deben empezar con /
// BORRAR o COMENTAR ESTAS LÍNEAS:
// import carrusel1 from '/images/carrusel1.jpeg'; 
// import carrusel2 from '/images/carrusel2.jpeg';
// import carrusel3 from '/images/carrusel3.jpeg';

const carouselData = [
  { id: 1, image: '/images/carrusel1.jpeg', alt: "Carrusel 1" },
  { id: 2, image: '/images/carrusel2.jpeg', alt: "Carrusel 2" },
  { id: 3, image: '/images/carrusel3.jpeg', alt: "Carrusel 3" },
];

const Carousel = () => {
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