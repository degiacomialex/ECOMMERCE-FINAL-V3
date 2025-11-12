// client/src/pages/CategoryPage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductGallery from '../components/ProductGallery';
import '../App.css'; // Para estilos

export const CategoryPage = ({ products, onShowDetails, onAddToCart }) => {
  // 1. Obtiene el nombre de la categoría desde la URL (ej: "Tazas")
  const { categoryName } = useParams();

  // 2. Filtra los productos que coinciden con esa categoría
  const filteredProducts = products.filter(product => 
    product.category.toUpperCase() === categoryName.toUpperCase()
  );

  return (
    <div className="category-page-container">
      {/* 💥 PUNTO 4: Botón para "Volver a Principal" 💥 */}
      <Link to="/" className="back-button">
        ← Volver a Principal
      </Link>

      {/* 💥 PUNTO 3: Galería sin carrusel 💥 */}
      <ProductGallery
        products={filteredProducts}
        filterCategory={categoryName.toUpperCase()} // Muestra el título
        onShowDetails={onShowDetails}
        onAddToCart={onAddToCart}
      />
    </div>
  );
};