// client/src/components/HeaderBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import LOGO_SRC from '/images/logo.jpeg'; 

// 1. Recibimos la nueva prop 'onHamburgerClick'
const HeaderBar = ({ cartItemCount, onHamburgerClick }) => {
  return (
    <header>
      {/* 2. Añadimos el botón hamburguesa (solo visible en mobile) */}
      <button className="hamburger-button" onClick={onHamburgerClick}>
        ☰
      </button>

      <Link to="/" className="header-logo-link" style={{textDecoration: 'none'}}>
        <h1>
          <img src={LOGO_SRC} alt="Los Luisés Sublimación" style={{height: '30px', marginRight: '10px'}}/>
          <span className="title-black">Lo</span>
          <span className="title-blue">S</span>
          <span className="title-black">Luis</span>
          <span className="title-black">es</span>
          <span className="sub-sublimacion">Sublimacion</span> 
        </h1>
      </Link>
      
      {/* 3. El search-bar ahora se oculta en mobile (ver CSS) */}
      <div className="search-bar">
        <input type="text" placeholder="¿Qué estás buscando?" />
        <button>Buscar</button>
      </div>
      
      {/* 4. El carrito sigue visible */}
      <Link to="/carrito" className="cart-icon cart-link">
        🛒 Carrito ({cartItemCount})
      </Link>
    </header>
  );
};

export default HeaderBar;