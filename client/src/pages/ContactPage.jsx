// client/src/pages/ContactPage.jsx

import React from 'react';
import '../App.css'; 

// El formulario ya no necesita JS para enviar, el HTML lo hace por Formspree
export const ContactPage = () => {

  // 💥 ELIMINAMOS la función 'handleSubmit' de JavaScript (ya no es necesaria)

  return (
    <div className="contact-page-container">
      <div className="contact-header">
        <h2>Contáctanos</h2>
        <p>¿Tienes preguntas? Estamos aquí para ayudarte a estampar tus ideas y diseños personalizados.</p>
      </div>

      <div className="contact-main-content">

        {/* --- LADO IZQUIERDO: FORMULARIO --- */}
        {/* 💥 CAMBIO CRÍTICO: Aquí debes PEGAR tu URL única de Formspree 💥 */}
        <form className="contact-form" action="https://formspree.io/f/xkgdjred" method="POST"> 
          <div className="form-group">
            <label htmlFor="name">Tu nombre completo por favor</label>
            {/* 💥 CAMBIO: Agregamos el atributo 'name' para que Formspree lo reciba */}
            <input type="text" id="name" name="Nombre" placeholder="Escribe tu nombre aquí" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Tu correo electrónico aquí*</label>
            {/* 💥 CAMBIO: El input de email DEBE tener name="_replyto" para que te permita responder directamente */}
            <input type="email" id="email" name="_replyto" placeholder="Escribe tu email aquí" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Tu mensaje o consulta*</label>
            <textarea id="message" name="Mensaje" rows="6" placeholder="Escribe tu mensaje aquí" required></textarea>
          </div>

          <button type="submit" className="submit-button">Enviar mi solicitud ahora</button>
        </form>

        {/* --- LADO DERECHO: INFO Y MAPA --- */}
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
            {/* 💥 PUNTO 9: Aquí puedes pegar el código de Google Maps 💥 */}
            <div className="map-placeholder">
              [Aquí iría el mapa de Google Maps]
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};