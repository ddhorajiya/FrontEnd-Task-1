// KeyRatios.tsx

import React from 'react';
import './KeyRatios.css';

interface KeyRatiosProps {
  data: {
    marketCap?: number;
    sharesOutstanding?: number;
    peRatio?: number;
    psRatio?: number;
    pbRatio?: number;
    pegRatio?: number;
    currentRatio?: number;
    debtToEquityRatio?: number;
    eps?: number;
  };
}

const KeyRatios: React.FC<KeyRatiosProps> = ({ data }) => {
  return (
    <div className="key-ratios">
      <h3>Key Ratios</h3>
      <ul>
        <li>Market Cap: {data.marketCap}</li>
        <li>Shares Outstanding: {data.sharesOutstanding}</li>
        <li>P/E Ratio: {data.peRatio}</li>
        <li>P/S Ratio: {data.psRatio}</li>
        <li>P/B Ratio: {data.pbRatio}</li>
        <li>PEG Ratio: {data.pegRatio}</li>
        <li>Current Ratio: {data.currentRatio}</li>
        <li>Debt to Equity Ratio: {data.debtToEquityRatio}</li>
        <li>EPS: {data.eps}</li>
      </ul>
    </div>
  );
};

export default KeyRatios;
