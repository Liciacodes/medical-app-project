import React from "react";

export const Cards = ({ cardIcon, cardData, cardText }) => {
  return (
    <div className="lg:col-span-1 h-[90px]  bg-white rounded-lg px-6 md:mx-6 shadow-gray-300 shadow-sm m-4  md:m-0 relative">
      <span className="font-bold text-[#b2b7c5] absolute top-0 right-0 mr-4">
        ...
      </span>
      <div className="flex items-center  sm:mt-4 gap-4">
        {cardIcon}
        <div>
          <p className="text-l md:text-xl font-bold">{cardData}</p>
          <p className="text-md text-[#b2b7c5]">{cardText}</p>
        </div>
      </div>
    </div>
  );
};
