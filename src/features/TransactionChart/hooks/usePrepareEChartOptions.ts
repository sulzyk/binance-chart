import { EChartsOption } from "echarts-for-react";
import { BinanceApi } from "../../types";

export function usePrepareEChartOptions(binanceData: BinanceApi[]): EChartsOption {
  const priceData = binanceData.map((item) => item.price);
  return {
    series: [{
      type: 'line',
      data: priceData
  }]
  }
}