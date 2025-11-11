// client/src/components/Footer.jsx

import React from 'react';
import '../App.css'; // Importamos el CSS principal para que mantenga los estilos

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h4>Medios de Pago</h4>
          <p>Transferencia Bancaria</p>
          <p>Mercado Pago</p>
        </div>
        <div className="footer-section">
          <h4>Sobre Nosotros</h4>
          <p><a href="#historia">Historia</a></p>
          <p><a href="#contacto">Contacto</a></p>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>losluisessublimacion@email.com</p>
          <p>Tel: +54 9 11 XXXX-XXXX</p>
        </div>
      </div>
      <div className="footer-copy">
        &copy; 2025 Los Luisés Sublimación. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;

