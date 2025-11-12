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
            
            {/* 💥 2. AÑADIMOS el botón visible "Ver Detalle" 💥 */}
            <button 
              className="view-details-button" 
              onClick={() => onShowDetails(product.id)}
            >
              Ver Detalle
            </button>

            {/* El overlay para "Añadir al carrito" sigue funcionando al pasar el mouse */}
            <div className="product-actions-overlay">
              <button 
                className="overlay-button" 
                style={{ backgroundColor: 'var(--accent-color)' }}
                onClick={() => onAddToCart(product)}
              >
                AÑADIR AL CARRITO
              </button>
            </div>

            {/* El botón original "AÑADIR AL CARRITO" que estaba abajo ahora está
                dentro del overlay, por lo que lo quitamos de aquí para no duplicar. */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;