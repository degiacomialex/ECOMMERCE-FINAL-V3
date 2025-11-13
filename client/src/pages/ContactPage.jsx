        // client/src/pages/ContactPage.jsx

        import React from 'react';
        import '../App.css'; // Para los estilos que agregaremos

        export const ContactPage = () => {

        const handleSubmit = (e) => {
            e.preventDefault();
            // Por ahora, solo mostramos una alerta.
            // En el futuro, aquí se conectaría a un servicio de email.
            alert("¡Formulario enviado! (Simulación)");
        };

        return (
            <div className="contact-page-container">
            <div className="contact-header">
                <h2>Contáctanos</h2>
                <p>¿Tienes preguntas? Estamos aquí para ayudarte a estampar tus ideas y diseños personalizados.</p>
            </div>

            <div className="contact-main-content">

                {/* --- LADO IZQUIERDO: FORMULARIO --- */}
                <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Tu nombre completo por favor</label>
                    <input type="text" id="name" placeholder="Escribe tu nombre aquí" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Tu correo electrónico aquí*</label>
                    <input type="email" id="email" placeholder="Escribe tu email aquí" required />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Tu mensaje o consulta*</label>
                    <textarea id="message" rows="6" placeholder="Escribe tu mensaje aquí" required></textarea>
                </div>

                <button type="submit" className="submit-button">Enviar mi solicitud ahora</button>
                </form>

                {/* --- LADO DERECHO: INFO Y MAPA --- */}
                <div className="contact-info">

                <div className="info-section">
                    <h3>Redes Sociales</h3>
                    <div className="social-links">
                    {/* Reemplaza '#' con tus links reales */}
                    <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                    </div>
                </div>

                <div className="info-section">
                    <h3>Ubicación</h3>
                    <p>Av. Siempre Viva 742, Springfield</p>
                    {/* Aquí es donde iría el mapa. 
                    Para insertarlo, hay que ir a Google Maps, buscar la dirección,
                    clic en "Compartir" -> "Insertar un mapa" y copiar el código HTML.
                    Lo dejamos pendiente para no complicar el build.
                    */}
                    <div className="map-placeholder">
                    [Aquí iría el mapa de Google Maps]
                    </div>
                </div>

                </div>
            </div>
            </div>
        );
        };