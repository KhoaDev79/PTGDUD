import React from "react";
import './Button.css';

const Button = ({ type = "primary", children }) => {
  return (
    <button className={`btn btn-${type}`}>
      {children}
    </button>
  );
};

export default Button;
