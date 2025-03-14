export async function fetchBinanceData() {
  try {
    const response = await fetch('https://api.binance.com/api/v3/avgPrice?symbol=BTCUSDT');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    alert('Problem with fetching binance api');
  }
}