import { useEffect, useState } from "react";
import { fetchBinanceData } from "../backend";
import { BinanceApi } from "./types";

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
    const interval = setInterval(updateData, 10000)
    return () => clearInterval(interval)
  }, [])
  
  return<></>
}