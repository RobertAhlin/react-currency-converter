import React, { useRef, useEffect } from 'react';

const CurrencyInput = ({ value, onChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on the input field when the component mounts
    inputRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    // Allow only numerical input
    if (/^\d*\.?\d*$/.test(inputValue)) {
      onChange(inputValue);
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Enter numerical value"
    />
  );
};

export default CurrencyInput;
