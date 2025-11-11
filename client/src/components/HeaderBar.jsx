// client/src/components/HeaderBar.jsx

import React from 'react';
import '../App.css'; // Usamos los estilos globales

// 💥 Movimos la importación del logo de App.jsx aquí
import LOGO_SRC from '/images/logo.jpeg'; 

// Este componente recibe props (propiedades) de App.jsx
const HeaderBar = ({ cartItemCount, onCartClick }) => {
  return (
    <header>
      <h1>
        <img src={LOGO_SRC} alt="Los Luisés Sublimación" style={{height: '30px', marginRight: '10px'}}/>
        <span className="title-black">Lo</span>
        <span className="title-blue">S</span>
        <span className="title-black">Luis</span>
        <span className="title-black">es</span>
        <span className="sub-sublimacion">Sublimacion</span> 
      </h1>
      <div className="search-bar">
        <input type="text" placeholder="¿Qué estás buscando?" />
        <button>Buscar</button>
        
        {/* Usamos las props que nos pasa App.jsx */}
        <button className="cart-icon" onClick={onCartClick}>
          🛒 Carrito ({cartItemCount})
        </button>
      </div>
    </header>
  );
};

export default HeaderBar;