import React from 'react';
import './Input.css';

const Input = ({ label, type = 'text', as = 'input', ...props }) => {
  const isTextarea = as === 'textarea';
  
  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      {isTextarea ? (
        <textarea className="input-field" {...props} />
      ) : (
        <input type={type} className="input-field" {...props} />
      )}
    </div>
  );
};

export default Input;
