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

  // 💥 CAMBIO: Diferenciamos "categorías" de "páginas" 💥
  { name: 'TAZAS', type: 'category', key: 'TAZAS' },
  { name: 'GUÍA DE TALLES', type: 'category', key: 'GUIA DE TALLES' },
  { name: 'CONTACTO', type: 'page', path: '/contacto' } // <-- ASÍ ES CORRECTO
];

const NavBar = ({ isMobileMenuOpen, onCloseMenu }) => {

  const handleLinkClick = () => {
    onCloseMenu();
  };

  // Función para construir el link correcto
  const getLink = (item) => {
    if (item.type === 'page') {
      return item.path; // ej: "/contacto"
    }
    // Por defecto, es una categoría
    return `/categoria/${item.key || item.name}`; // ej: "/categoria/TAZAS"
  };

  return (
    <>
      {/* --- MENÚ DE ESCRITORIO --- */}
      <nav className="bottom-menu desktop-nav">
        <ul className="main-nav">
          {menuItems.map(item => (
            <li key={item.name} className={`nav-item ${item.dropdown ? 'has-dropdown' : ''}`}>

              {!item.dropdown ? (
                <Link to={getLink(item)} className="nav-link">
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

      {/* --- MENÚ HAMBURGUESA --- */}
      <div className={`mobile-menu-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="mobile-menu-close" onClick={onCloseMenu}>&times;</button>
        <div className="mobile-menu-content-scroll"> 
          <ul className="mobile-nav-list">
            {menuItems.map(item => {
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
              return (
                <li key={item.name}>
                  <Link to={getLink(item)} className="mobile-nav-link" onClick={handleLinkClick}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;