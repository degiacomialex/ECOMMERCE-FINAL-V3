// client/src/components/HeaderBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import LOGO_SRC from '/images/logo.jpeg'; 

const HeaderBar = ({ cartItemCount }) => {
  return (
    <header>
      <Link to="/" style={{textDecoration: 'none'}}>
        <h1>
          <img src={LOGO_SRC} alt="Los Luisés Sublimación" style={{height: '30px', marginRight: '10px'}}/>
          <span className="title-black">Lo</span>
          <span className="title-blue">S</span>
          <span className="title-black">Luis</span>
          <span className="title-black">es</span>
          <span className="sub-sublimacion">Sublimacion</span> 
        </h1>
      </Link>
      
      <div className="search-bar">
        <input type="text" placeholder="¿Qué estás buscando?" />
        <button>Buscar</button>
        
        <Link to="/carrito" className="cart-icon cart-link">
          🛒 Carrito ({cartItemCount})
        </Link>
      </div>
    </header>
  );
};

export default HeaderBar;