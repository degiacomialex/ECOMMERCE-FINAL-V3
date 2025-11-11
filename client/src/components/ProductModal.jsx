// client/src/components/ProductModal.jsx

import React from 'react';
import '../App.css';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        <div className="modal-body">
          <img src={product.image} alt={product.name} className="modal-image"/>
          <div className="modal-details">
            <h2>{product.name}</h2>
            <p className="modal-price">${product.price.toLocaleString('es-AR')}</p>
            <p>{product.description}</p>

            <div className="size-options">
              <label>Talle: </label>
              <select>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
              </select>
              <button className="size-guide-button">Guía de Talles</button>
            </div>

            <button 
              className="modal-add-to-cart-button" 
              onClick={() => onAddToCart(product)}
            >
              AÑADIR AL CARRITO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;