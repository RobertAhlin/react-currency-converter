import React, { useState, useEffect } from 'react';
import { fetchExchangeRates, fetchCurrencies } from '../api/ApiService';

function LayoutComponent() {
  const [exchangeRates, setExchangeRates] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [error, setError] = useState(null);
  const API_KEY = '9fbac0605ee99c619e7579287f2cfdf1';

  useEffect(() => {
    // Fetch exchange rates when component mounts
    fetchExchangeRates()
      .then(data => {
        console.log('Exchange rates response:', data);
        setExchangeRates(data);
      })
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
        setError(error);
      });

    // Fetch available currencies
    fetchCurrencies()
      .then(data => {
        console.log('Currencies response:', data);
        setCurrencies(Object.keys(data.quotes));
      })
      .catch(error => {
        console.error('Error fetching currencies:', error);
        setError(error);
      });
  }, []);

  const handleCurrencyChange = event => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div>
      <header>
        <h1>Currency Exchange Rates</h1>
      </header>
      <main>
        {exchangeRates && exchangeRates.quotes && (
          <div>
            <h2>Exchange Rates</h2>
            <ul>
              <li>SEK-EUR: {exchangeRates.quotes.SEKEUR}</li>
              <li>SEK-GBP: {exchangeRates.quotes.SEKGBP}</li>
              <li>SEK-CAD: {exchangeRates.quotes.SEKCAD}</li>
              <li>SEK-USD: {exchangeRates.quotes.SEKUSD}</li>
              {/* Add more currencies as needed */}
            </ul>
          </div>
        )}
      </main>
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default LayoutComponent;
