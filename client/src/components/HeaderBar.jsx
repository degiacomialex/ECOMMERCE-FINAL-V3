// client/src/components/HeaderBar.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
// ❌ IMPORTACIÓN ELIMINADA: Usamos la ruta estática en línea

const HeaderBar = ({ cartItemCount, onHamburgerClick }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/buscar/${searchTerm.trim()}`);
      setSearchTerm('');
    }
  };

  return (
    <header>
      <button className="hamburger-button" onClick={onHamburgerClick}>
        ☰ <span className="hamburger-text">Menú</span>
      </button>

      <Link to="/" className="header-logo-link" style={{textDecoration: 'none'}}>
        <h1>
          {/* 🟢 RUTA ESTÁTICA DIRECTA: Para evitar el conflicto de compilación */}
          <img src="/images/logo.jpeg" alt="Los Luisés Sublimación" style={{height: '30px', marginRight: '10px'}}/>
          <span className="title-black">Lo</span>
          <span className="title-blue">S</span>
          <span className="title-black">Luis</span>
          <span className="title-black">es</span>
          <span className="sub-sublimacion">Sublimacion</span> 
        </h1>
      </Link>
      
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input 
          type="text" 
          placeholder="¿Qué estás buscando?" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      
      <Link to="/carrito" className="cart-icon cart-link">
        🛒 Carrito ({cartItemCount})
      </Link>
    </header>
  );
};

export default HeaderBar;