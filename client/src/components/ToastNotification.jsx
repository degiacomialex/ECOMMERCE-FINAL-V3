// client/src/components/ToastNotification.jsx

import React from 'react';
import '../App.css';

const ToastNotification = ({ show, message }) => {
  return (
    <div className="toast-container">
      <div className={`toast ${show ? 'show' : ''}`}>
        <span className="toast-icon">😊</span> 
        <div>
          <h4>¡Listo!</h4>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ToastNotification;