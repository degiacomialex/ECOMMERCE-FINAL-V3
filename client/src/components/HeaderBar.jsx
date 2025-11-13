// client/src/components/HeaderBar.jsx

import React, { useState } from 'react'; // 1. Importamos useState
import { Link, useNavigate } from 'react-router-dom'; // 2. Importamos useNavigate
import '../App.css';
import LOGO_SRC from '/images/logo.jpeg'; 

const HeaderBar = ({ cartItemCount, onHamburgerClick }) => {
  // 3. Creamos un estado para guardar lo que el usuario escribe
  const [searchTerm, setSearchTerm] = useState('');

  // 4. 'useNavigate' es el hook que nos permite "empujar" al usuario a una nueva URL
  const navigate = useNavigate();

  // 5. Esta función se llama cuando se envía el formulario (al hacer clic o dar Enter)
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    if (searchTerm.trim()) { // Si el usuario escribió algo (no solo espacios)
      navigate(`/buscar/${searchTerm.trim()}`); // Lo enviamos a la página de búsqueda
      setSearchTerm(''); // Limpiamos el input
    }
  };

  return (
    <header>
      <button className="hamburger-button" onClick={onHamburgerClick}>
        ☰ <span className="hamburger-text">Menú</span>
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

      {/* 6. Convertimos el 'div' en un 'form' y le pasamos el 'onSubmit' */}
      <form className="search-bar" onSubmit={handleSearchSubmit}>
        <input 
          type="text" 
          placeholder="¿Qué estás buscando?" 
          value={searchTerm} // Controlamos el valor
          onChange={(e) => setSearchTerm(e.target.value)} // Actualizamos el estado al tipear
        />
        {/* 7. El botón ahora es de tipo "submit" */}
        <button type="submit">Buscar</button>
      </form>

      <Link to="/carrito" className="cart-icon cart-link">
        🛒 Carrito ({cartItemCount})
      </Link>
    </header>
  );
};

export default HeaderBar;