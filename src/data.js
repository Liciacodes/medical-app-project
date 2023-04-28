import React from "react";
import { MdPeople } from "react-icons/md";
import { HiChartPie, HiHome } from "react-icons/hi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiDoctorFace } from "react-icons/gi";
import { AiFillCalendar, AiFillSetting } from "react-icons/ai";

export const NavListData = [
  { id: 1, title: "Patients", icon: <MdPeople />, path: "/patients" },
  { id: 2, title: "Overview", icon: <HiChartPie />, path: "/" },
  { id: 3, title: "Map", icon: <FaMapMarkerAlt />, path: "/map" },
  { id: 4, title: "Departments", icon: <HiHome />, path: "/department" },
  { id: 5, title: "Doctors", icon: <GiDoctorFace />, path: "/doctors" },
  { id: 6, title: "History", icon: <AiFillCalendar />, path: "/history" },
  { id: 7, title: "Settings", icon: <AiFillSetting />, path: "/settings" },
];
