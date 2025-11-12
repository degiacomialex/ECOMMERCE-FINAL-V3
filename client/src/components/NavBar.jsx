// client/src/components/NavBar.jsx

import React from 'react';
import '../App.css'; 

const menuItems = [
  { 
    name: 'INDUMENTARIA PERSONALIZADA', 
    dropdown: true, 
    subcategories: ['Remeras', 'Buzos y Camperas'] 
  },
  { 
    name: 'ACCESORIOS', 
    dropdown: true, 
    subcategories: ['Sets Materos Personalizados', 'Botellas Personalizadas', 'Gorras y Pilusos', 'Llaveros', 'Almohadones'] 
  },
  { 
    name: 'EGRESADOS', 
    dropdown: true, 
    subcategories: ['Buzos', 'Camperas', 'Remeras', 'Banderas'] 
  },
  { 
    name: 'FECHAS ESPECIALES', 
    dropdown: true, 
    subcategories: ['Día del Padre', 'Día de la Madre', 'Día del Amigo', 'Navidad', 'Otras Fiestas'] 
  },
  { 
    name: 'PARA EMPRESAS', 
    dropdown: true, 
    subcategories: ['Ropa Corporativa', 'Merchandising'] 
  },
  // 💥 CAMBIO: Los links simples ahora también tienen un 'filterKey'
  { name: 'TAZAS', filterKey: 'TAZAS' },
  { name: 'GUÍA DE TALLES', filterKey: 'GUIA DE TALLES' }, // (O puedes poner un link a otra página)
];


const NavBar = ({ onSetView, onSetFilter }) => {

  // 💥 NUEVA FUNCIÓN:
  // Un solo manejador de clicks para poner todo en 'home' y filtrar
  const handleNavClick = (filter) => {
    onSetFilter(filter);
    onSetView('home');
  };

  return (
    <nav className="bottom-menu">
      <ul className="main-nav">
        {menuItems.map(item => (
          <li key={item.name} className={`nav-item ${item.dropdown ? 'has-dropdown' : ''}`}>

            {/* 💥 Lógica de click actualizada 💥 */}
            <a 
              href="#" // Usamos '#' para evitar que la página recargue
              className="nav-link" 
              // Si no es un dropdown, filtra al hacer click
              onClick={() => !item.dropdown && handleNavClick(item.filterKey || item.name)}
            >
              {item.name}
            </a>

            {/* Los dropdowns funcionan igual, pero usando la nueva función */}
            {item.dropdown && (
              <ul className="dropdown-menu">
                {item.subcategories.map(sub => (
                  <li key={sub}>
                    <button onClick={() => handleNavClick(sub)}>
                      {sub}
                    </button>
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