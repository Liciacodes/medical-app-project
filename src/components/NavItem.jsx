import React from "react";
import { Link, useLocation } from "react-router-dom";

export const NavItem = ({ id, icon, title, path, item }) => {
  const { pathname } = useLocation();
  return (
    <li className="last:mt-12">
      <Link
        to={path}
        key={id}
        className={`${
          pathname === path
            ? "text-[#7642DC] flex items-center gap-4 text-xl mb-4"
            : "flex items-center gap-4 text-xl mb-4 text-[#b2b7c5] hover:text-black"
        }`}
      >
        {icon}
        {title}
      </Link>
    </li>
  );
};
