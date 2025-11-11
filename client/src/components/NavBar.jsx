// client/src/components/NavBar.jsx

import React from 'react';
import '../App.css'; // Usamos los estilos globales

// 💥 Movimos la estructura del menú de App.jsx aquí
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
  { name: 'TAZAS', link: '#tazas' },
  { name: 'GUÍA DE TALLES', link: '#guiatalles' },
];


// Este componente también recibe props de App.jsx
const NavBar = ({ onSetView, onSetFilter }) => {
  return (
    <nav className="bottom-menu">
      <ul className="main-nav">
        {menuItems.map(item => (
          <li key={item.name} className={`nav-item ${item.dropdown ? 'has-dropdown' : ''}`}>
            <a href={item.link || '#'} className="nav-link" onClick={() => onSetView('home')}>
              {item.name}
            </a>
            {item.dropdown && (
              <ul className="dropdown-menu">
                {item.subcategories.map(sub => (
                  <li key={sub}>
                    {/* * Usamos las props: 
                     * 1. Llamamos a onSetFilter con la subcategoría
                     * 2. Llamamos a onSetView para asegurarnos de volver al 'home'
                    */}
                    <button onClick={() => { onSetFilter(sub); onSetView('home'); }}>
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