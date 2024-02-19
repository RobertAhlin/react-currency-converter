import React, { useState, useEffect } from 'react';
import LayoutComponent from './components/LayoutComponent';
import { fetchExchangeRates } from './api/ApiService';
import './App.css';

const API_KEY = '9fbac0605ee99c619e7579287f2cfdf1';

function App() {
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchExchangeRates(API_KEY);
        console.log('Exchange rates response:', data);
        setExchangeRates(data);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchData();
  }, []);

  const handleCurrencyChange = (event) => {
    console.log(event.target.value);
    // Implement currency change logic here if needed
  };

  const handleConversion = () => {
    console.log('Perform conversion logic here');
    // Implement currency conversion logic here
  };

  return (
    <div className="App">
      <LayoutComponent
        exchangeRates={exchangeRates}
        onCurrencyChange={handleCurrencyChange}
        onConversion={handleConversion}
      />
    </div>
  );
}

export default App;
