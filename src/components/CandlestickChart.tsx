import React from 'react';
import { ChartCanvas, Chart, CandlestickSeries, XAxis, YAxis, discontinuousTimeScaleProviderBuilder, OHLCTooltip } from 'react-financial-charts';
import { useWindowSize } from 'react-use';
import './CandlestickChart.css';

interface CandlestickData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface CandlestickChartProps {
  data: CandlestickData[];
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  const { width } = useWindowSize();
  const ratio = window.devicePixelRatio || 1;

  const xScaleProvider = discontinuousTimeScaleProviderBuilder().inputDateAccessor(d => new Date(d.date));
  const { data: chartData, xScale, xAccessor, displayXAccessor } = xScaleProvider(data);

  return (
    <div className="chart-container">
      <div className="chart-header">Apple Stock Candlestick Chart</div>
      <ChartCanvas
        height={400}
        ratio={ratio}
        width={Math.min(width * 0.8, 800)}
        data={chartData}
        xScale={xScale}
        xAccessor={xAccessor}
        displayXAccessor={displayXAccessor}
        seriesName="AAPL"
        className="chart"
      >
        <Chart id={1} yExtents={d => [d.high, d.low]}>
          <XAxis />
          <YAxis />
          <CandlestickSeries />
          <OHLCTooltip origin={[-40, 0]} />
        </Chart>
      </ChartCanvas>
    </div>
  );
};

export default CandlestickChart;
