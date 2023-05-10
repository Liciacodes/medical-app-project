import React from "react";
import DashboardStats from "./DashboardStats";
import { ChartCard } from "./ChartCard";
import { DoughnutChart2 } from "./DoughnutChart2";
import { TimeAdmitted } from "./TimeAdmitted";
import { PatientByDivision } from "./PatientByDivision";
import { ThisMonth } from "./ThisMonth";

export const Overview = () => {
  return (
    <div className="flex flex-col gap-2 flex-wrap lg:gap-3">
      <DashboardStats />
      <div className="flex flex-col lg:flex-row gap-4  min-w-0">
        <ChartCard />
        <DoughnutChart2 />
      </div>
      <div className="flex flex-col lg:flex-row gap-4  min-w-0">
        <TimeAdmitted />
        <PatientByDivision />
        <ThisMonth />
      </div>
    </div>
  );
};
