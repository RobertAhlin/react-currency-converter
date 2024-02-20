import React, { useState, useEffect } from 'react';
import LayoutComponent from './components/LayoutComponent';
import { fetchExchangeRates } from './api/ApiService';
import './App.css';

function App() {
  const [exchangeRates, setExchangeRates] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchExchangeRates();
        setExchangeRates(data);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        // Implement error handling, e.g., set an error state
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <LayoutComponent exchangeRates={exchangeRates} />
    </div>
  );
}

export default App;
