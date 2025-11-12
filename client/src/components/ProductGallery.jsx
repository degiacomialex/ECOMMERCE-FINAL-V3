// client/src/components/ProductGallery.jsx

import React from 'react';
import '../App.css';

const ProductGallery = ({ 
  products,
  filterCategory,
  onShowDetails,
  onAddToCart 
}) => {
  
  return (
    <div>
      <h3 style={{ borderBottom: '1px solid #ccc', paddingBottom: '5px', textAlign: 'center' }}>
        {filterCategory === 'TODOS' ? 'TODA LA TIENDA' : filterCategory}
      </h3>
      <div className="gallery-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>${product.price.toLocaleString('es-AR')}</p>
            
            {/* 💥 NUEVO CONTENEDOR DE BOTONES VISIBLES 💥 */}
            <div className="product-card-actions">
              <button 
                className="view-details-button" 
                onClick={() => onShowDetails(product.id)}
              >
                Ver Detalle
              </button>
              
              <button 
                className="add-to-cart-button" 
                onClick={() => onAddToCart(product)}
              >
                Añadir al Carrito
              </button>
            </div>

            {/* 💥 HEMOS ELIMINADO EL DIV 'product-actions-overlay' 💥 */}

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;