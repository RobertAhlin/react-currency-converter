import React, { useState, useEffect } from 'react';
import { fetchExchangeRates } from '../api/ApiService';
import CurrencyInput from './CurrencyInput';
import ConvertButton from './ConvertButton';
import ConversionResult from './ConversionResult';

function LayoutComponent() {
  const [exchangeRates, setExchangeRates] = useState(null);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [conversionResult, setConversionResult] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchExchangeRates();
        console.log('Exchange rates response:', data);
        setExchangeRates(data);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  const handleConvert = () => {
    if (exchangeRates && exchangeRates.rates && selectedCurrency) {
      const conversionRate = exchangeRates.rates[selectedCurrency];
      if (conversionRate) {
        const result = parseFloat(inputValue) * conversionRate;
        setConversionResult(result.toFixed(2));
      }
    }
  };

  return (
    <div>
      <header>
        <h1>Currency Exchange Rates</h1>
      </header>
      <main>
        <div>
          <h2>Enter numerical value:</h2>
          <CurrencyInput value={inputValue} onChange={handleInputChange} /> SEK
        </div>
        <div>
          <h3>Convert to:</h3>
          <select value={selectedCurrency} onChange={handleCurrencyChange}>
            <option value="">Select Currency</option>
            {exchangeRates &&
              exchangeRates.rates &&
              Object.keys(exchangeRates.rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
          </select>
        </div>
        <ConvertButton onClick={handleConvert} />
        {conversionResult && <ConversionResult result={conversionResult} />}
      </main>
      <footer>{/* Footer content */}</footer>
    </div>
  );
}

export default LayoutComponent;
