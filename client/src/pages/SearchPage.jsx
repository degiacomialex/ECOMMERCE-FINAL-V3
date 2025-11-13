// client/src/pages/SearchPage.jsx

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductGallery from '../components/ProductGallery';
import '../App.css'; 

export const SearchPage = ({ products, onShowDetails, onAddToCart }) => {
  // 1. Obtenemos el término de búsqueda de la URL
  const { searchTerm } = useParams();

  // 2. Filtramos los productos
  const filteredProducts = products.filter(product => 
    // Buscamos en el nombre Y en la descripción (todo en minúscula)
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-page-container">
      <Link to="/" className="back-button">
        ← Volver a Principal
      </Link>

      {/* Un título dinámico que muestra lo que se buscó */}
      <h2 className="search-title">
        Resultados para: "{searchTerm}"
      </h2>

      {/* 3. Mostramos la galería o un mensaje si no hay resultados */}
      {filteredProducts.length > 0 ? (
        <ProductGallery
          products={filteredProducts}
          filterCategory={`Resultados (${filteredProducts.length})`}
          onShowDetails={onShowDetails}
          onAddToCart={onAddToCart}
        />
      ) : (
        <p className="empty-search-message">
          No se encontraron productos que coincidan con tu búsqueda.
        </p>
      )}
    </div>
  );
};