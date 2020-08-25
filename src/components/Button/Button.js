import React from 'react';

const Button = ({ onSubmit }) => (
  <>
    <button onClick={onSubmit} className="Button">
      load more
    </button>
  </>
);
export default Button;
