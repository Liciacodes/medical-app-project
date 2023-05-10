import React from "react";
import { Doughnut } from "react-chartjs-2";
import { AiOutlineDown } from "react-icons/ai";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = () => {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          display: true,
          padding: 20,
        },
      },
      title: {
        display: false,
      },
    },
  };
  const doughnutChartData = {
    labels: ["Inpatient", "Outpatient"],

    datasets: [
      {
        label: "Outpatients ",
        data: [5000, 1000],
        backgroundColor: ["#713bdb", "#33d69f"],
      },
    ],
  };
  return (
    <div className="lg:mt-4 md:mt-4 ">
      <div className="flex items-center lg:mb-12 lg:justify-end justify-start gap-1 px-2 mb-2 ">
        <p className="text-sm text-[#b2b7c5] font-medium">
          Show <span className="font-semibold text-black ">by months</span>
        </p>
        <AiOutlineDown size={15} className="text-[#b2b7c5]" />
      </div>
      <div className="w-[80%] md:w-[200px] lg:w-[200px] h-[12rem] md:mt-6 lg:mt-2 sm:ml-0 flex justify-center items-center">
        <Doughnut data={doughnutChartData} options={options}></Doughnut>
      </div>
    </div>
  );
};
