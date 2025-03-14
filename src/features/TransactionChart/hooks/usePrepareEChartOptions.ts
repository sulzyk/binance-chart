import { EChartsOption } from "echarts-for-react";
import { BinanceApi } from "../../types";

export function usePrepareEChartOptions(binanceData: BinanceApi[]): EChartsOption {
  const {axis, price} = binanceData.reduce<{price: string[],
    axis: string[]}>((prev, curr) => {
    prev.axis.push(new Date(curr.closeTime).toISOString());
    prev.price.push(curr.price);
    
    return prev
  }, {
    price: [],
    axis: []
  })
  return {
    series: [{
      type: 'line',
      data: price,
  }],
    xAxis: {
      type: "category",
      data: axis
    },
    yAxis: {
      type: "value"
    },
  }
}