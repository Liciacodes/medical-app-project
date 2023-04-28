import { AiOutlineDown } from "react-icons/ai";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

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
    <div className="w-[100%] lg:w-[23%] bg-white rounded-lg shadow-gray-300 shadow-sm py-4 px-4  h-[20rem]">
      <p className="font-bold mb-10">Patients by Gender</p>
      <div className="ml-6 mt-14 w-[80%] md:w-[800px] lg:w-[200px] h-[12rem]">
        <Doughnut data={doughnutChartData} options={options} />
      </div>
    </div>
  );
};
