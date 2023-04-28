import React from "react";
import { Line } from "react-chartjs-2";

export const ThisMonth = () => {
  const options = {
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
        },
        border: {
          display: false,
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
        gridLines: {},
      },
    },
  };
  const barChartData = {
    labels: [14, 15, 16, 17, 18, 19],

    datasets: [
      {
        data: [20, 100, 50, 90, 110, 120],
        borderColor: "white",
        backgroundColor: "white",
        borderWidth: 2,
        tension: 0.4,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };
  return (
    <div className="w-full lg:w-[25%] bg-[#642ad6] rounded-lg shadow-gray-300 shadow-sm text-white p-4 h-[15rem]">
      <h1 className="text-white font-bold">3,240</h1>
      <p className="text-white font-light">Patients this month</p>
      <div className="w-[100%] md:w-[500px] lg:w-[250px] h-[140px]">
        <Line data={barChartData} options={options} />
      </div>
    </div>
  );
};
