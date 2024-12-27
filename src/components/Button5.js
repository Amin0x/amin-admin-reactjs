import React from 'react';
import './Button5.css'; // Assuming the CSS is in a separate file named Button5.css

const Button5 = ({ text, onClick }) => {
  return (
    <button className="button-5" role="button" onClick={onClick}>
      {text}
    </button>
  );
}

export default Button5;
