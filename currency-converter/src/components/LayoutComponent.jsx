import React from 'react';
import CurrencyInput from './CurrencyInput';
import ConvertButton from './ConvertButton';
import ConversionResult from './ConversionResult';
import ErrorComponent from './ErrorComponent';

function LayoutComponent({ currencyValue, onCurrencyChange, onConversion }) {
  return (
    <div>
      <header>
        <h1>Currency Converter</h1>
      </header>
      <main>
        <CurrencyInput value={currencyValue} onChange={onCurrencyChange} />
        <ConvertButton onClick={onConversion} />
        <ConversionResult />
        <ErrorComponent />
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default LayoutComponent;