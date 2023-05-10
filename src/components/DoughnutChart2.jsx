import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart2 = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        align: "start",
        labels: {
          display: true,
          usePointStyle: true,
          pointStyle: "circle",
          align: "start",
          padding: 20,
          color: "black",
        },
      },
      title: {
        display: false,
      },
    },
  };
  const doughnutChartData = {
    labels: ["Female", "Male"],

    datasets: [
      {
        label: "Outpatients ",
        data: [5000, 2500],
        backgroundColor: ["#713bdb", "#ff8b57"],
      },
    ],
  };
  return (
    <div className="w-full lg:w-[24%] bg-white rounded-lg shadow-gray-300 shadow-sm py-3 px-6  h-[20rem]">
      <p className="font-bold mb-10">Patients by Gender</p>
      <div className="mt-14 w-[80%] md:w-[800px] lg:w-[200px] h-[12rem] flex justify-center ">
        <Doughnut data={doughnutChartData} options={options} />
      </div>
    </div>
  );
};
