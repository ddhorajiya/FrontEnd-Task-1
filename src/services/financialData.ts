import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/financials';

export const getFinancialData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching financial data", error);
    return null;
  }
};
