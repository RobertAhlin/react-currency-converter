const API_KEY = 'ce75afd1a783407092f33b03771d43ce';

export async function fetchExchangeRates() {
  const url = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}
