function fetchExchangeRates(API_KEY) {
    return fetch(`https://api.currencylayer.com/live?access_key=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch exchange rates');
        }
        return response.json();
      })
      .then(data => data.quotes)
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
        throw error;
      });
  }
  
  export { fetchExchangeRates };