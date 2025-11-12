// client/src/pages/HomePage.jsx

import React from 'react';

// Importamos los componentes que esta página necesita
import Carousel from '../components/Carousel';
import AboutUs from '../components/AboutUs';
import ProductGallery from '../components/ProductGallery';

export const HomePage = ({ 
  products, 
  filterCategory, 
  onShowDetails, 
  onAddToCart 
}) => {
  return (
    <>
      <Carousel />
      
      <AboutUs />

      <ProductGallery
        products={products}
        filterCategory={filterCategory}
        onShowDetails={onShowDetails}
        onAddToCart={onAddToCart}
      />
    </>
  );
};