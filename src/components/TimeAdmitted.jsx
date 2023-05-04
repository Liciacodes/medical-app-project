import React from "react";
import { Line } from "react-chartjs-2";
import { AiOutlineDown } from "react-icons/ai";

import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, LinearScale, CategoryScale, PointElement);

export const TimeAdmitted = () => {
  const options = {
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          borderDash: [10],
        },
      },
      y: {
        border: {
          display: false,
          dash: [4, 4],
        },
        min: 0,
        max: 150,
        ticks: {
          stepSize: 50,
        },
      },
    },
  };
  const barChartData = {
    labels: ["07 am", "08 am", "09 am", "10 am", "11 am", "12 pm"],

    datasets: [
      {
        data: [20, 100, 50, 120, 80, 150],
        backgroundColor: "#faf1ef",
        pointBorderColor: "#ffb391",
        pointBorderWidth: 1,
        borderColor: "#ffb391",
        tension: 0.7,
        fill: true,
      },
    ],
  };
  return (
    <div className="w-full lg:w-[50%] bg-white rounded-lg shadow-gray-300 shadow-sm p-2 h-[15rem]">
      <div className="flex justify-between mb-4 mx-4">
        <p className="font-bold">Time Admitted</p>
        <div className="flex items-center gap-2 border-b-0 border-red-500">
          <p className="font-medium">Today</p>
          <AiOutlineDown size={15} className="text-[#b2b7c5]" />
        </div>
      </div>
      <div className="w-[100%] md:w-[500px] lg:w-[600px] h-[180px]">
        <Line data={barChartData} options={options} />
      </div>
    </div>
  );
};
