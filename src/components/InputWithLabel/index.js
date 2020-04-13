import React from 'react';

const InputWithLabel = ({ id, value, type = 'text', onInputChange, isFocused, children }) => {
  return (
    <section>
      <label htmlFor={id}>{children}</label>
      &nbsp;
      <input id={id} type={type} value={value} onChange={onInputChange} isFocused />
    </section>
  );
}

export default InputWithLabel;