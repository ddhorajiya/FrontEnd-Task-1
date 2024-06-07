// AnalystEstimates.tsx
import React from 'react';
import './AnalystEstimates.css';

interface AnalystEstimatesProps {
  data: {
    [key: string]: string;
  } | undefined; // Allow data to be undefined
}

const AnalystEstimates: React.FC<AnalystEstimatesProps> = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>; // Show loading state if data is not available yet
  }

  return (
    <div className="analyst-estimates">
      <h3>Analyst Estimates</h3>
      <ul>
        {Object.entries(data).map(([analyst, estimate]) => (
          <li key={analyst}>
            {analyst}: {estimate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnalystEstimates;
