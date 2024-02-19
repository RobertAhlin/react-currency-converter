// ConversionResult.js
import React from 'react';

function ConversionResult(props) {
  return (
    <div>
      <p>Converted amount: {props.convertedAmount} {props.currency}</p>
    </div>
  );
}

export default ConversionResult;
