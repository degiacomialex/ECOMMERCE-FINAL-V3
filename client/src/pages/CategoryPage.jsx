// client/src/pages/CategoryPage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductGallery from '../components/ProductGallery';
import '../App.css'; 

export const CategoryPage = ({ products, onShowDetails, onAddToCart }) => {
  // 1. Obtiene el nombre de la categoría desde la URL
  const { categoryName } = useParams();

  // 💥 FIX CRÍTICO: Usamos .includes() para buscar la etiqueta dentro de la cadena
  const filteredProducts = products.filter(product => 
    product.category.toUpperCase().includes(categoryName.toUpperCase())
  );

  return (
    <div className="category-page-container">
      <Link to="/" className="back-button">
        ← Volver a Principal
      </Link>
      
      <ProductGallery
        products={filteredProducts}
        filterCategory={categoryName.toUpperCase()}
        onShowDetails={onShowDetails}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};