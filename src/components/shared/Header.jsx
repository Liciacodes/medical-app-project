import React from "react";
import { AiOutlineSearch, AiOutlineDown, AiOutlineMenu } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import profile from "../../assets/profile.JPG";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Group } from "@mantine/core";
import { FiPlus } from "react-icons/fi";
import { NavListData } from "../../data";
import { NavItem } from "../NavItem";

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="bg-white text-[#b2b7c5] h-16 px-6 flex items-center justify-between border-b border-gray-200">
      <div className="lg:hidden block">
        <Drawer
          opened={opened}
          onClose={close}
          title="Menu"
          className="hover:bg-red-500"
        >
          <div className="flex">
            <button className="bg-[#7642DC] outline-none text-white px-6 py-4 rounded-lg flex items-center gap-3">
              Register patient
              <FiPlus size={25} />
            </button>
          </div>
          <ul className="mb-8 ml-6 mt-8">
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
        </Drawer>

        <Group position="center">
          <AiOutlineMenu
            size={30}
            onClick={open}
            className="text-[#b2b7c5] font-bold"
          />
        </Group>
      </div>
      <div className="lg:flex lg:items-center  font-bold  hidden">
        <AiOutlineSearch size={20} />
        <p className="ml-2 font-bold"> Search...</p>
      </div>
      <div className="flex items-center gap-2">
        <IoMdNotifications size={30} />
        <img src={profile} alt="profile" width={40} className="rounded-full " />
        <p className="hidden lg:block font-md">Felicia Udosen</p>
        <AiOutlineDown size={15} className="mr-2 lg:block hidden" />
      </div>
    </div>
  );
};

export default Header;
