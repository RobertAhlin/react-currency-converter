import React, { useState, useEffect } from 'react';
import { fetchExchangeRates } from '../api/ApiService';

function LayoutComponent() {
  const [exchangeRates, setExchangeRates] = useState(null);
  const [error, setError] = useState(null);

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

  return (
    <div>
      <header>
        <h1>Currency Exchange Rates</h1>
      </header>
      <main>
        {exchangeRates && exchangeRates.quotes && (
          <div>
            <h2>Exchange Rates</h2>
            <p>
              {Object.entries(exchangeRates.quotes).map(([currencyPair, rate], index, arr) => (
                <React.Fragment key={currencyPair}>
                  {`${currencyPair}: ${rate}`}
                  {index !== arr.length - 1 && ' | '}
                </React.Fragment>
              ))}
            </p>
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
