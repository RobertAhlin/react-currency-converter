import React from 'react';

const RadioButtonsComponent = ({ options, selectedOption, onChange }) => {
  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioButtonsComponent;
