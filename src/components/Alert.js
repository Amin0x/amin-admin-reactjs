import React, { useState } from 'react';
import 'Alert.css'

const Alert = ({ message, isVisible }) => {
  const [isVisible, setIsVisible] = useState(isVisible);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="alert">
        <span className="closebtn" onClick={handleClose}>
          &times;
        </span>
        {message}
      </div>
    )
  );
};

export default Alert;
