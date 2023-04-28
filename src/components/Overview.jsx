import React from "react";
import DashboardStats from "./DashboardStats";
import { ChartCard } from "./ChartCard";
import { DoughnutChart2 } from "./DoughnutChart2";
import { TimeAdmitted } from "./TimeAdmitted";
import { PatientByDivision } from "./PatientByDivision";
import { ThisMonth } from "./ThisMonth";

export const Overview = () => {
  return (
    <div className="flex flex-col gap-3">
      <DashboardStats />
      <div className="flex  flex-col lg:flex-row gap-6 w-full">
        <ChartCard />
        <DoughnutChart2 />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 w-full">
        <TimeAdmitted />
        <PatientByDivision />
        <ThisMonth />
      </div>
    </div>
  );
};
