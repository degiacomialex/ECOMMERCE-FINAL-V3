// client/src/pages/GuiaDeTallesPage.jsx

import React from 'react';
import '../App.css'; 

export const GuiaDeTallesPage = () => {
  return (
    <div className="guia-talles-container">
      <h2>Guía de Talles y Medidas</h2>
      <p>Aquí puedes consultar todas las medidas de nuestras remeras, buzos y camperas.</p>
      
      {/* 💥 Ejemplo de tabla de talles (puedes reemplazarla con una imagen) 💥 */}
      <table className="talles-table">
        <thead>
          <tr>
            <th>Talle</th>
            <th>Ancho (cm)</th>
            <th>Largo (cm)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>S</td><td>48</td><td>68</td></tr>
          <tr><td>M</td><td>50</td><td>70</td></tr>
          <tr><td>L</td><td>54</td><td>73</td></tr>
          <tr><td>XL</td><td>58</td><td>76</td></tr>
        </tbody>
      </table>
      
      <p style={{marginTop: '20px', color: '#888'}}>Si tienes dudas, ¡contáctanos!</p>
    </div>
  );
};