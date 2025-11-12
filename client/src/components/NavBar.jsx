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

// 1. Recibimos las props del estado del menú
const NavBar = ({ isMobileMenuOpen, onCloseMenu }) => {
  
  // 2. Función para que el menú se cierre al hacer clic en un link
  const handleLinkClick = () => {
    onCloseMenu();
  };

  return (
    <>
      {/* --- 1. MENÚ DE ESCRITORIO (Visible solo en PC) --- */}
      <nav className="bottom-menu desktop-nav">
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

      {/* --- 2. MENÚ HAMBURGUESA (Visible solo en Celular) --- */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={onCloseMenu}>&times;</button>
        <ul className="mobile-nav-list">
          {/* Mapeamos todos los items y sub-items en una sola lista vertical */}
          {menuItems.map(item => {
            // Caso 1: Es un item con subcategorías
            if (item.dropdown) {
              return (
                <React.Fragment key={item.name}>
                  <li className="mobile-nav-header">{item.name}</li>
                  {item.subcategories.map(sub => (
                    <li key={sub}>
                      <Link to={`/categoria/${sub}`} className="mobile-nav-link" onClick={handleLinkClick}>
                        {sub}
                      </Link>
                    </li>
                  ))}
                </React.Fragment>
              );
            }
            // Caso 2: Es un item simple (ej: TAZAS)
            return (
              <li key={item.name}>
                <Link to={`/categoria/${item.filterKey || item.name}`} className="mobile-nav-link" onClick={handleLinkClick}>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavBar;