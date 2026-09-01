import React from 'react';

const Button = ({ text, type = 'button', onClick, className = '' }) => {
  return (
    <button type={type} onClick={onClick} className={`bg-main text-white font-tajawal font-bold py-3 px-6 rounded-md hover:opacity-90 transition-opacity ${className}`}>
      {text}
    </button>
  );
};

export default Button;