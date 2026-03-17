import React, { useState, useEffect } from "react";
import './Alert.css';

const Alert = ({ type = "success", message, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger fade in sau khi mount
    requestAnimationFrame(() => setVisible(true));
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      if (onClose) onClose();
    }, 300);
  };

  return (
    <div className={`alert alert-${type} ${visible ? 'alert-visible' : 'alert-hidden'}`}>
      <span className="alert-message">{message}</span>
      <button className="alert-close" onClick={handleClose}>&times;</button>
    </div>
  );
};

export default Alert;
