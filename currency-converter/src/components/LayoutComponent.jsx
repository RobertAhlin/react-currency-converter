import { useState, useEffect } from 'react';
import { fetchExchangeRates } from '../api/ApiService';
import CurrencyInput from './CurrencyInput';
import ConvertButton from './ConvertButton';
import ConversionResult from './ConversionResult';
import ErrorComponent from './ErrorComponent';

function LayoutComponent() {
  const [exchangeRates, setExchangeRates] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [conversionResult, setConversionResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchExchangeRates();
        setExchangeRates(data);
      } catch (error) {
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

    // Error handling if faulty user behaving.
  const handleConvert = () => {
    if (!inputValue) {
      setError(new Error('Please enter a value in SEK.'));
      return;
    }
  
    if (!selectedCurrency) {
      setError(new Error('Please select a currency from the dropdown menu.'));
      return;
    }
  
    if (exchangeRates && exchangeRates.rates && selectedCurrency) {
      calculateConversion();
    }
  };

  const calculateConversion = () => {
    const sekToUsdRate = exchangeRates.rates['SEK'];
    const inputInUsd = parseFloat(inputValue) / sekToUsdRate;
    const conversionRate = exchangeRates.rates[selectedCurrency];
    
    if (conversionRate) {
      const result = inputInUsd * conversionRate;
      setConversionResult({
        amount: result.toFixed(2),
        currency: selectedCurrency
      });
    }
  };

  return (
    <div className="layout-container">
      <header>
        <h1>Currency Exchange Converter</h1>
      </header>
      <main>
        <div className="input-section">
          <CurrencyInput value={inputValue} onChange={handleInputChange} /> SEK
        </div>
        <div className="currency-dropdown">
          <h3>Convert to:</h3>
          <select value={selectedCurrency} onChange={handleCurrencyChange}>
            <option value="">Select Currency</option>
            {exchangeRates && exchangeRates.rates &&
              Object.keys(exchangeRates.rates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
          </select>
        </div>
        <ConvertButton onClick={handleConvert} />
        {conversionResult && (
          <ConversionResult
            result={parseFloat(conversionResult.amount)} // Convert the result to a number
            currency={conversionResult.currency}
          />
        )}
        {error && <ErrorComponent message={error.message} />}
      </main>
    </div>
  );
}

export default LayoutComponent;
