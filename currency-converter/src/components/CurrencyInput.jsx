import React from 'react';

const CurrencyInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    // Allow only numerical input
    if (/^\d*\.?\d*$/.test(inputValue)) {
      onChange(inputValue);
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Enter numerical value"
    />
  );
};

export default CurrencyInput;
