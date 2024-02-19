import React from 'react';

function CurrencyInput(props) {
  return (
    <div>
      <label htmlFor="amount">Amount:</label>
      <input type="number" id="amount" value={props.amount} onChange={props.onChange} />
      <select value={props.currency} onChange={props.onCurrencyChange}>
        {/* Här kan du lägga till alternativ för olika valutor */}
      </select>
    </div>
  );
}

export default CurrencyInput;