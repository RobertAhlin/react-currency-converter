import React from 'react';

const ConversionResult = ({ result, currency }) => {
  return (
    <p>
      Conversion Result: {result} {currency}
    </p>
  );
};

export default ConversionResult;