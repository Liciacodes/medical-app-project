import React from "react";
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  BarElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";
ChartJS.register(BarElement, LinearScale, CategoryScale, PointElement);

export const BarChart = () => {
  const options = {
    plugins: {
      legend: {
        display: false,
        maintainAspectRatio: false,
      },
      title: {
        display: false,
        text: "Outpatient vs. Inpatient trends",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },

      y: {
        border: {
          display: false,
          dash: [4, 4],
        },
        grid: {
          display: true,
        },

        min: 0,
        max: 4500,
        ticks: {
          stepSize: 1500,
        },
      },
    },
  };

  const barChartData = {
    labels: [
      "Oct 2019",
      "Nov 2019",
      "Dec 2019",
      "Jan 2020",
      "Feb 2020",
      "Mar 2020",
    ],

    datasets: [
      {
        label: "Outpatients ",
        data: [800, 900, 1000, 1500, 1700, 2250],
        backgroundColor: "#33d69f",
        borderWidth: 1,
        borderRadius: 10,
        barPercentage: 0.5,
      },
      {
        label: " Inpatient Trends",
        data: [1500, 1900, 2000, 3000, 3500, 4500],
        borderRadius: 10,
        backgroundColor: "#713bdb",
        borderWidth: 1,
        barPercentage: 0.5,
      },
    ],
  };
  return (
    <div className="">
      <p className="mb-4 font-bold">Outpatients vs. Inpatients Trends</p>
      <div className="w-[80%] md:w-[300px] lg:w-[750px] h-[15rem]">
        <Bar data={barChartData} options={options} />
      </div>
    </div>
  );
};
