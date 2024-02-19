import React from 'react';

const ConversionResult = ({ result, selectedCurrency }) => {
  return (
    <p>
      Conversion Result: {result} {selectedCurrency}
    </p>
  );
};

export default ConversionResult;
