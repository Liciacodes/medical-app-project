import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { HiHome, HiScissors } from "react-icons/hi";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { FaHeadSideVirus } from "react-icons/fa";

export const PatientByDivision = () => {
  return (
    <div className="w-full lg:w-[28%] bg-white rounded-lg p-4 lg:p-4  shadow-gray-300 shadow-sm h-[15rem]">
      <p className="font-bold flex items-center gap-3 justify-between mb-4">
        Patients by Division <AiOutlineDown className="text-[#b2b7c5]" />
      </p>

      <div className="text-[#b2b7c5] ">
        <div className="flex justify-between mb-5 mt-2 hover:shadow-md hover:shadow-gray-300 hover:p-1">
          <li className="flex gap-3 items-center">
            <HiHome /> DIVISION
          </li>
          <p className="font-medium">PT.</p>
        </div>

        <div className="flex justify-between mb-5 hover:shadow-md hover:shadow-gray-300 hover:p-1">
          <li className="flex gap-3 items-center">
            <BsFillHeartPulseFill /> Cardiology
          </li>
          <p className="text-black font-semibold">247</p>
        </div>

        <div className="flex justify-between mb-5 hover:shadow-md hover:shadow-gray-300 hover:p-1">
          <li className="flex gap-3 items-center">
            <FaHeadSideVirus /> Neurology
          </li>
          <p className="text-black font-semibold">164</p>
        </div>
        <div className="flex justify-between mb-4 hover:shadow-md hover:shadow-gray-300 hover:p-1">
          <li className="flex gap-3 items-center">
            <HiScissors /> Surgery
          </li>
          <p className="text-black font-semibold">86</p>
        </div>
      </div>
    </div>
  );
};
