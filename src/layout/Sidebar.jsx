import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { AiFillHome, AiOutlineTwitter } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { FaDollarSign, FaDiscord } from "react-icons/fa";
import { RiBarChartFill } from "react-icons/ri";
import { GiCampingTent } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";
import { IoNewspaperOutline } from "react-icons/io5";
const Sidebar = () => {
  return (
    <div className=" text-white w_sidebar min-h-screen flex  justify-center">
      <div className=" w_inner_sidebar">
        <div className=" mt-5 mb-9">
          <img
            src={logo}
            style={{ width: "100%", height: "250px", objectFit: "cover" }}
            alt=""
          />
        </div>
        <div className=" w-full flex items-center flex-col">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "w-full py-3 border border-pr rounded-xl hover:text-gray-400 text-pr flex items-center px-3 gap-3"
                : " w-full py-3 rounded-xl text-gray-500 hover:text-gray-400 flex items-center px-3 gap-3"
            }
            to="/"
          >
            {" "}
            <AiFillHome className=" w-7 h-7" /> Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "w-full py-3 border border-pr rounded-xl hover:text-gray-400 text-pr flex items-center px-3 gap-3"
                : " w-full py-3 rounded-xl text-gray-500 hover:text-gray-400 flex items-center px-3 gap-3"
            }
            to="/dashboard"
          >
            {" "}
            <MdDashboard className=" w-7 h-7" /> Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "w-full py-3 border border-pr rounded-xl hover:text-gray-400 text-pr flex items-center px-3 gap-3"
                : " w-full py-3 rounded-xl text-gray-500 hover:text-gray-400 flex items-center px-3 gap-3"
            }
            to="/diplodocus"
          >
            {" "}
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="egg"
              class="svg-inline--fa fa-egg"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              style={{ fontSize: "15px", width: "23px", paddingLeft: "2px" }}
            >
              <path
                fill="currentColor"
                d="M192 16c-106 0-192 182-192 288c0 106 85.1 192 192 192c105.1 0 192-85.1 192-192C384 198 297.1 16 192 16zM160.1 138C128.6 177.1 96 249.8 96 304C96 312.8 88.84 320 80 320S64 312.8 64 304c0-63.56 36.7-143.3 71.22-186c5.562-6.906 15.64-7.969 22.5-2.406C164.6 121.1 165.7 131.2 160.1 138z"
              ></path>
            </svg>{" "}
            Diplodocus eggs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "w-full py-3 border border-yellow-400 hover:text-gray-400 rounded-xl text-yellow-400 flex items-center px-3 gap-3"
                : " w-full py-3 rounded-xl text-gray-500 hover:text-gray-400 flex items-center px-3 gap-3"
            }
            to="/t-regs"
          >
            {" "}
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="egg"
              class="svg-inline--fa fa-egg"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              style={{ fontSize: "15px", width: "23px", paddingLeft: "2px" }}
            >
              <path
                fill="currentColor"
                d="M192 16c-106 0-192 182-192 288c0 106 85.1 192 192 192c105.1 0 192-85.1 192-192C384 198 297.1 16 192 16zM160.1 138C128.6 177.1 96 249.8 96 304C96 312.8 88.84 320 80 320S64 312.8 64 304c0-63.56 36.7-143.3 71.22-186c5.562-6.906 15.64-7.969 22.5-2.406C164.6 121.1 165.7 131.2 160.1 138z"
              ></path>
            </svg>{" "}
            T-Rex eggs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "w-full py-3 border border-pr rounded-xl hover:text-gray-400 text-pr flex items-center px-3 gap-3 pb-4"
                : " w-full py-3 pb-4 rounded-xl text-gray-500 hover:text-gray-400 flex items-center px-3 gap-3"
            }
            to="/dino-camp"
          >
            {" "}
            <GiCampingTent className=" w-7 h-7" /> Dino Camp
          </NavLink>
          <div
            style={{ height: "1px" }}
            className=" w-full bg-gray-500 my-2"
          ></div>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "w-full py-3 border border-pr hover:text-gray-400 rounded-xl text-pr flex items-center px-3 gap-3 pb-4"
                : " w-full py-3 pb-4 rounded-xl text-gray-500 hover:text-gray-400 flex items-center px-3 gap-3"
            }
            to="/buy-camp"
          >
            {" "}
            <FaDollarSign className=" w-7 h-7" /> Buy $Dino
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "w-full py-3 border border-pr hover:text-gray-400 rounded-xl text-pr flex items-center px-3 gap-3 pb-4"
                : " w-full py-3 pb-4 rounded-xl text-gray-500 hover:text-gray-400 flex items-center px-3 gap-3"
            }
            to="/charts"
          >
            {" "}
            <RiBarChartFill className=" w-7 h-7" /> Charts
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "w-full py-3 border border-pr hover:text-gray-400 rounded-xl text-pr flex items-center px-3 gap-3 pb-4"
                : " w-full py-3 pb-4 rounded-xl text-gray-500 hover:text-gray-400 flex items-center px-3 gap-3"
            }
            to="/newspaper"
          >
            {" "}
            <IoNewspaperOutline className=" w-7 h-7" /> Newspaper
          </NavLink>
          <div className=" w-full flex items-center justify-center gap-4 pt-3">
            <a
              href="https://facebook.com"
              className=" text-gray-500 hover:text-gray-400"
            >
              <AiOutlineTwitter className=" w-7 h-7" />
            </a>
            <a
              href="https://discord.com"
              className=" text-gray-500 hover:text-gray-400"
            >
              <FaDiscord className=" w-7 h-7" />
            </a>
            <a
              href="https://discord.com"
              className=" text-gray-500 hover:text-gray-400"
            >
              <CgNotes className=" w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
