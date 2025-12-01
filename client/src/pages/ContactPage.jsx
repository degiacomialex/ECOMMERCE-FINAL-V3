// client/src/pages/ContactPage.jsx

import React from 'react';
import '../App.css'; 

export const ContactPage = () => {
    
  return (
    <div className="contact-page-container">
      <div className="contact-header">
        <h2>Contáctanos</h2>
        <p>¿Tienes preguntas? Estamos aquí para ayudarte a estampar tus ideas y diseños personalizados.</p>
      </div>

      <div className="contact-main-content">
        
        {/* 💥 CAMBIO CRÍTICO: PEGA AQUÍ TU URL ÚNICA DE FORMSPREE 💥 */}
        {/* Ejemplo: action="https://formspree.io/f/mlekrrbn" */}
        <form className="contact-form" action="TU_URL_DE_FORMSPREE_AQUI" method="POST"> 
          <div className="form-group">
            <label htmlFor="name">Tu nombre completo por favor</label>
            {/* El atributo name="Nombre" es lo que Formspree recibirá */}
            <input type="text" id="name" name="Nombre" placeholder="Escribe tu nombre aquí" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Tu correo electrónico aquí*</label>
            {/* name="_replyto" es CRÍTICO para poder responder al email del cliente */}
            <input type="email" id="email" name="_replyto" placeholder="Escribe tu email aquí" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Tu mensaje o consulta*</label>
            <textarea id="message" name="Mensaje" rows="6" placeholder="Escribe tu mensaje aquí" required></textarea>
          </div>

          <button type="submit" className="submit-button">Enviar mi solicitud ahora</button>
        </form>

        <div className="contact-info">
          
          <div className="info-section">
            <h3>Redes Sociales</h3>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="#" target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>

          <div className="info-section">
            <h3>Ubicación</h3>
            <p>Av. Siempre Viva 742, Springfield</p>
            <div className="map-placeholder">
              [Aquí iría el mapa de Google Maps]
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};