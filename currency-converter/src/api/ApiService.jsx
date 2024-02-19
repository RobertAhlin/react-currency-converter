const API_KEY = '9fbac0605ee99c619e7579287f2cfdf1';
const currencies = 'EUR,GBP,CAD,USD';
const source = 'SEK';
const format = 1;

export async function fetchExchangeRates() {
  const url = `http://apilayer.net/api/live?access_key=${API_KEY}&currencies=${currencies}&source=${source}&format=${format}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return response.json();
}

export async function fetchCurrencies() {
  const url = `http://apilayer.net/api/live?access_key=${API_KEY}&format=${format}`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  const data = await response.json();
  
  if (!data || !data.quotes) {
    throw new Error('Currencies data is not available');
  }
  
  return data;
}
