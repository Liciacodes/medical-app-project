import React from "react";
import { FaCarSide, FaBed } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { CiMedicalClipboard } from "react-icons/ci";

const DashboardStats = () => {
  return (
    <div className="flex gap-6 w-[100%] lg:w-full flex-col lg:flex-row">
      <BoxWrapper>
        <span className="absolute top-0 right-0 mr-4 font-bold text-[#b2b7c5]">
          ...
        </span>
        <div>
          <FaBed
            size={40}
            className="text-blue-500 bg-blue-100 rounded-full p-2 "
          />
        </div>
        <div>
          <strong>3,256</strong>
          <p className="text-[#b2b7c5]">Total Patients</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <span className="absolute top-0 right-0 mr-4 font-bold text-[#b2b7c5]">
          ...
        </span>
        <div>
          <BsFillPeopleFill
            size={40}
            className="text-red-500 bg-red-100 rounded-full p-2 "
          />
        </div>
        <div>
          <strong> 394</strong>
          <p className="text-[#b2b7c5]">Available Staffs</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <span className="absolute top-0 right-0 mr-4 font-bold text-[#b2b7c5]">
          ...
        </span>
        <div>
          <CiMedicalClipboard
            size={40}
            className="text-green-500 bg-green-100 rounded-full p-2"
          />
        </div>
        <div>
          <strong>$2,536</strong>
          <p className="text-[#b2b7c5]">Avg Treat. Costs</p>
        </div>
      </BoxWrapper>
      <BoxWrapper>
        <span className="absolute top-0 right-0 mr-4 font-bold text-[#b2b7c5]">
          ...
        </span>
        <div>
          <FaCarSide
            size={40}
            className="text-purple-500 bg-purple-100 rounded-full p-2 "
          />
        </div>
        <div>
          <strong>38</strong>
          <p className="text-[#b2b7c5]">Available Cars</p>
        </div>
      </BoxWrapper>
    </div>
  );
};

export default DashboardStats;

const BoxWrapper = ({ children }) => {
  return (
    <div className="bg-white rounded-lg p-4 flex-1 border-gray-200 flex items-center gap-4 relative shadow-gray-300 shadow-sm">
      {children}
    </div>
  );
};
