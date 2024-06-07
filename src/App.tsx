import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CandlestickChart from './components/CandlestickChart';
import KeyRatios from './components/KeyRatios';
import AnalystEstimates from './components/AnalystEstimates';
import './App.css';

const App: React.FC = () => {
  const [stockData, setStockData] = useState<any>({});
  const [financialData, setFinancialData] = useState<any>({});
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchStockData();
    fetchFinancialData();
  }, []);

  const fetchStockData = async () => {
    try {
      const response = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=JLRLX8L5MXOEZTHL');
      setStockData(response.data);
    } catch (error: any) {
      setError(error.message || 'Unknown error');
    }
  };

  const fetchFinancialData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/financials');
      setFinancialData(response.data);
    } catch (error: any) {
      setError(error.message || 'Unknown error');
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  const candlestickData = stockData['Time Series (Daily)']
    ? Object.entries(stockData['Time Series (Daily)']).map(([date, values]: [string, any]) => ({
        date,
        open: parseFloat(values['1. open']),
        high: parseFloat(values['2. high']),
        low: parseFloat(values['3. low']),
        close: parseFloat(values['4. close']),
      }))
    : [];

  return (
    <div className="App">
      <header>
        <h1>Apple Stock Dashboard</h1>
      </header>
      <main>
        <section>
          <CandlestickChart data={candlestickData} />
        </section>
        <section>
          <KeyRatios data={financialData} />
        </section>
        <section>
          <h2>Analyst Estimates</h2>
          <AnalystEstimates data={financialData.analystEstimates} />
        </section>
      </main>
    </div>
  );
};

export default App;
