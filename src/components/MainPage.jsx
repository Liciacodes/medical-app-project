import React from "react";
import { NavBar } from "./NavBar";
import { Sidebar } from "./Sidebar";
import { ChartCard } from "./ChartCard";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaCarSide, FaBed } from "react-icons/fa";
import { CiMedicalClipboard } from "react-icons/ci";

import { Cards } from "./Cards";
import { DoughnutChart2 } from "./PieChart2";
import { TimeAdmitted } from "./TimeAdmitted";
import { PatientByDivision } from "./PatientByDivision";
import { ThisMonth } from "./ThisMonth";

export const MainPage = () => {
  return (
    <section className="lg:grid lg:h-[100vh] lg:w-[100vw] lg:grid-cols-5 lg:grid-rows-3 bg-[#f5f6fa] ">
      <Sidebar />
      <NavBar />

      <Cards
        cardIcon={
          <FaBed
            size={40}
            className="text-blue-500 bg-blue-100 rounded-full p-2 "
          />
        }
        cardData="3,256"
        cardText="Total Patients"
      />
      <Cards
        cardIcon={
          <BsFillPeopleFill
            size={40}
            className="text-red-500 bg-red-100 rounded-full p-2 "
          />
        }
        cardData="394"
        cardText="Available Staffs"
      />
      <Cards
        cardIcon={
          <CiMedicalClipboard
            size={40}
            className="text-green-500 bg-green-100 rounded-full p-2"
          />
        }
        cardData="$2,536"
        cardText="Avg Treat. Costs"
      />
      <Cards
        cardIcon={
          <FaCarSide
            size={40}
            className="text-purple-500 bg-purple-100 rounded-full p-2"
          />
        }
        cardData="38"
        cardText="Available Cars"
      />
      <ChartCard />
      <DoughnutChart2 />
      <TimeAdmitted />
      <PatientByDivision />
      <ThisMonth />
    </section>
  );
};
