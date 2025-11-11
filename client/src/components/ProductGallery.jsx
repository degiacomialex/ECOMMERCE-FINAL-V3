// client/src/components/ProductGallery.jsx

import React from 'react';
import '../App.css';

// Recibe todo por props. Este componente solo "muestra" datos.
const ProductGallery = ({ 
  products,         // La lista de productos ya filtrada
  filterCategory,   // El nombre de la categoría seleccionada
  onShowDetails,    // La función para abrir el modal
  onAddToCart       // La función para añadir al carrito
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

            <div className="product-actions-overlay">
              <button 
                className="overlay-button" 
                onClick={() => onShowDetails(product.id)} // Llama a la función del prop
              >
                VER DETALLE
              </button>
              <button 
                className="overlay-button" 
                style={{ backgroundColor: 'var(--accent-color)' }}
                onClick={() => onAddToCart(product)} // Llama a la función del prop
              >
                AÑADIR AL CARRITO
              </button>
            </div>

            {/* Este botón estaba en tu código original. 
               Como ahora tienes el overlay, quizás quieras borrarlo. 
               Lo dejo comentado por si acaso. 
            */}
            {/* <button onClick={() => onAddToCart(product)}>AÑADIR AL CARRITO</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;