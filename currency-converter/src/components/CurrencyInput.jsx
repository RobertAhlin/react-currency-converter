import React from 'react';

function CurrencyInput({ value, onChange, currencies, selectedCurrency, onSelectCurrency }) {
  return (
    <div>
      <label htmlFor="currency">Currency:</label>
      <select id="currency" value={selectedCurrency} onChange={onSelectCurrency}>
        {currencies.map(currency => (
          <option key={currency} value={currency}>{currency}</option>
        ))}
      </select>
      <input type="number" value={value} onChange={onChange} />
    </div>
  );
}

export default CurrencyInput;
