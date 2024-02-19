import React, { useState } from 'react';
import LayoutComponent from './components/LayoutComponent';
import './App.css';

function App() {
  const [currencyValue, setCurrencyValue] = useState('');

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
        onCurrencyChange={handleCurrencyChange}
        onConversion={handleConversion}
      />
    </div>
  );
}

export default App;
