import React from "react";
import { MdHealthAndSafety } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { NavListData } from "../../data";
import { NavItem } from "../NavItem";

const SideBard = () => {
  return (
    <div className="lg:flex lg:flex-col lg:w-60 bg-white hidden">
      <div className="flex items-center mx-4 my-4">
        <MdHealthAndSafety size={30} color="#33D69E" />
        <span className="font-bold text-xl ml-1">H-care</span>
      </div>
      <div className="mt-6 ml-4">
        <button className="bg-[#7642DC] outline-none text-white px-4 py-4 rounded-lg flex items-center gap-3">
          Register patient
          <FiPlus size={25} />
        </button>
      </div>

      <div>
        <ul className="mb-8 mt-4 ml-8">
          {NavListData.map((item) => {
            return (
              <NavItem
                key={item.id}
                title={item.title}
                icon={item.icon}
                path={item.path}
              />
            );
          })}
        </ul>
      </div>
      <div className="rounded-lg bg-[#f5effd] w-[200px] h-[230px] ml-4 ">
        <div className="w-[200px] h-[150px] pb-2">
          <img
            src="https://img.freepik.com/free-vector/realistic-display-smartphone-with-different-apps_52683-30241.jpg?size=338&ext=jpg"
            alt="logo"
            className="object-cover w-full rounded-lg h-full"
          />
          <h3 className="text-center font-bold py-2 ">Get Mobile App</h3>
          <div className="flex justify-center gap-2 ">
            <BsApple className="rounded-full bg-white w-10 h-10 p-2" />
            <FaGooglePlay className="rounded-full bg-white w-10 h-10 p-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBard;
