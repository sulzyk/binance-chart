import './TransactionChart.css'
import { useEffect, useState } from "react";
import { fetchBinanceData } from "../../backend";
import { BinanceApi } from "../types";
import ReactECharts from 'echarts-for-react';
import { usePrepareEChartOptions } from "./hooks/usePrepareEChartOptions";

export function TransactionChart() {
  const [data, setData] = useState<BinanceApi[]>([]);

  useEffect(() => {
    async function updateData() {
      const fetchedData = await fetchBinanceData();
      if (fetchedData) {
        setData(previousData => [...previousData, fetchedData]);
      }
    }

    updateData();
    const interval = setInterval(updateData, 5000)
    return () => clearInterval(interval)
  }, [])

  const options = usePrepareEChartOptions(data);

  return (
    <div className="chart-wrapper">
      <ReactECharts option={options} />
    </div>)
}