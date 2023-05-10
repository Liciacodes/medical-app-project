import React from "react";
import { BarChart } from "./BarChart";
import { DoughnutChart } from "./DoughnutChart1";

export const ChartCard = () => {
  return (
    <div className="w-[100%] lg:w-[75%] lg:h-[20rem] py-2 px-6 bg-white rounded-lg shadow-gray-300 shadow-sm flex flex-col lg:flex-row gap-1 md:gap-6 lg:gap-3 justify-between">
      <BarChart />
      <DoughnutChart />
    </div>
  );
};
