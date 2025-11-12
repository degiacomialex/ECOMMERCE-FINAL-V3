// client/src/components/NavBar.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const menuItems = [
  { name: 'INDUMENTARIA PERSONALIZADA', dropdown: true, subcategories: ['Remeras', 'Buzos y Camperas'] },
  { name: 'ACCESORIOS', dropdown: true, subcategories: ['Sets Materos Personalizados', 'Botellas Personalizadas', 'Gorras y Pilusos', 'Llaveros', 'Almohadones'] },
  { name: 'EGRESADOS', dropdown: true, subcategories: ['Buzos', 'Camperas', 'Remeras', 'Banderas'] },
  { name: 'FECHAS ESPECIALES', dropdown: true, subcategories: ['Día del Padre', 'Día de la Madre', 'Día del Amigo', 'Navidad', 'Otras Fiestas'] },
  { name: 'PARA EMPRESAS', dropdown: true, subcategories: ['Ropa Corporativa', 'Merchandising'] },
  { name: 'TAZAS', filterKey: 'TAZAS' },
  { name: 'GUÍA DE TALLES', filterKey: 'GUIA DE TALLES' },
];

const NavBar = () => {
  return (
    <nav className="bottom-menu">
      <ul className="main-nav">
        {menuItems.map(item => (
          <li key={item.name} className={`nav-item ${item.dropdown ? 'has-dropdown' : ''}`}>
            
            {!item.dropdown ? (
              <Link to={`/categoria/${item.filterKey || item.name}`} className="nav-link">
                {item.name}
              </Link>
            ) : (
              <a href="#" className="nav-link" onClick={(e) => e.preventDefault()}>
                {item.name}
              </a>
            )}

            {item.dropdown && (
              <ul className="dropdown-menu">
                {item.subcategories.map(sub => (
                  <li key={sub}>
                    {/* 💥 Usamos la nueva clase 'dropdown-link' 💥 */}
                    <Link to={`/categoria/${sub}`} className="dropdown-link">
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;