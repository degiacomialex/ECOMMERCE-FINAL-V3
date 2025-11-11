// client/src/components/CartView.jsx

import React from 'react';
import '../App.css';

const CartView = ({ 
  cartItems, 
  totalItems, 
  totalPrice, 
  onRemoveFromCart, 
  onCheckout, 
  onBackToStore 
}) => {

  return (
    <div className="cart-view-page">
      <button className="back-button" onClick={onBackToStore}>
        ← Volver a la tienda
      </button>
      <h2 className="page-title">Tu Carrito ({totalItems} Productos)</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart-message">El carrito está vacío. ¡Añade algo genial!</p>
      ) : (
        <div className="cart-checkout-container">
          <ul className="cart-list">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h5>{item.name}</h5>
                  <p>Cantidad: {item.quantity} x ${item.price.toLocaleString('es-AR')}</p>
                </div>
                <button className="remove-item" onClick={() => onRemoveFromCart(item.id)}>
                  ELIMINAR
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-summary-total">
            <div className="total-label">Total a Pagar:</div>
            <div className="total-amount">${totalPrice.toLocaleString('es-AR')}</div>
            <button className="checkout-button" onClick={onCheckout} disabled={cartItems.length === 0}>
              PAGAR CON CHECKOUT PRO
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartView;