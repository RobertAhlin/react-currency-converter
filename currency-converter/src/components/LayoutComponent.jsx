import React, { useState, useEffect } from 'react';
import CurrencyInput from './CurrencyInput';
import ConvertButton from './ConvertButton';
import ConversionResult from './ConversionResult';
import ErrorComponent from './ErrorComponent';
import { fetchExchangeRates } from '../api/ApiService'; // Adjust the path as per your project structure

function LayoutComponent({ currencyValue, onCurrencyChange, onConversion }) {
  const [exchangeRates, setExchangeRates] = useState({});
  const API_KEY = '9fbac0605ee99c619e7579287f2cfdf1';

  useEffect(() => {
    fetchExchangeRates(API_KEY)
      .then(data => {
        setExchangeRates(data);
      })
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
      });
  }, [API_KEY]);

  return (
    <div>
      <header>
        <h1>Currency Converter</h1>
      </header>
      <main>
        <CurrencyInput value={currencyValue} onChange={onCurrencyChange} />
        <ConvertButton onClick={onConversion} />
        <ConversionResult exchangeRates={exchangeRates} />
        <ErrorComponent />
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default LayoutComponent;
