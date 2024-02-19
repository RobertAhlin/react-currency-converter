import React, { useState, useEffect } from 'react';
import LayoutComponent from './components/LayoutComponent';
import { fetchExchangeRates } from './api/ApiService'; // Import the fetchExchangeRates function
import './App.css';

function App() {
  const [currencyValue, setCurrencyValue] = useState('');
  const [exchangeRates, setExchangeRates] = useState({});
  const API_KEY = '9fbac0605ee99c619e7579287f2cfdf1';

  useEffect(() => {
    // Fetch exchange rates from the API
    fetchExchangeRates(API_KEY)
      .then(data => {
        console.log('Exchange rates response:', data); // Log the response data to the console
        setExchangeRates(data);
      })
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
      });
  }, [API_KEY]);

  const handleCurrencyChange = (event) => {
    setCurrencyValue(event.target.value);
  };

  const handleConversion = () => {
    console.log(currencyValue);
    // Implement currency conversion logic here
  };

  return (
    <div className="App">
      <LayoutComponent
        currencyValue={currencyValue}
        exchangeRates={exchangeRates}
        onCurrencyChange={handleCurrencyChange}
        onConversion={handleConversion}
      />
    </div>
  );
}

export default App;
