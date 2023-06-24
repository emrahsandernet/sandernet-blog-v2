import React from 'react'
import {BiUserCircle} from "react-icons/bi";
import {
  FaBriefcase,
  FaPenFancy,
  FaFileAlt,
  FaRegCommentDots,
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useThemeContext } from '../hooks/useThemeContext';

export const Menu = (props) => {
  const {  state } = useThemeContext();
  return (
    <div
      className={
        props.isOpen
          ? state.isDark
            ? " flex bg-[rgba(0,0,0,0.25)] rounded-md  flex-row fixed bottom-0 w-full   lg:top-1/3 lg:left-5  lg:flex-col lg:bottom-1/4 lg:w-[80px] lg:h-[330px] justify-content"
            : " flex bg-white rounded-md  flex-row fixed bottom-0 w-full   lg:top-1/3 lg:left-5  lg:flex-col lg:bottom-1/4 lg:w-[80px] lg:h-[330px] justify-content"
          : " hidden "
      }
    >
      <Link
        to="/"
        className={
          props.route === "/"
            ? "flex flex-col mx-auto p-2 text-[#fe655c] cursor-pointer"
            : state.isDark
            ? "flex flex-col mx-auto p-2 text-[#a5b3ce] cursor-pointer hover:text-white"
            : "flex flex-col mx-auto p-2 text-[#354765] cursor-pointer hover:text-black"
        }
      >
        <BiUserCircle className=" w-6 h-6 mx-auto " />
        <h1 className="mx-auto p-1  text-xs ">HAKKIMDA</h1>
      </Link>
      <Link
        to={"/projects"}
        className={
          props.route === "/projects"
            ? "flex flex-col mx-auto p-2 text-[#fe655c] cursor-pointer"
            : state.isDark
            ? "flex flex-col mx-auto p-2 text-[#a5b3ce] cursor-pointer hover:text-white"
            : "flex flex-col mx-auto p-2 text-[#354765] cursor-pointer hover:text-black"
        }
      >
        <FaBriefcase className=" w-6 h-6 mx-auto " />
        <h1 className="mx-auto p-1  text-xs ">PROJELER</h1>
      </Link>
      <Link
        to="/"
        className={
          props.route === "/blog"
            ? "flex flex-col mx-auto p-2 text-[#fe655c] cursor-pointer"
            : state.isDark
            ? "flex flex-col mx-auto p-2 text-[#a5b3ce] cursor-pointer hover:text-white"
            : "flex flex-col mx-auto p-2 text-[#354765] cursor-pointer hover:text-black"
        }
      >
        <FaPenFancy className=" w-6 h-6 mx-auto " />
        <h1 className="mx-auto p-1  text-xs ">BLOG</h1>
      </Link>
      <Link
        to={"/resume"}
        className={
          props.route === "/resume"
            ? "flex flex-col mx-auto p-2 text-[#fe655c] cursor-pointer"
            : state.isDark
            ? "flex flex-col mx-auto p-2 text-[#a5b3ce] cursor-pointer hover:text-white"
            : "flex flex-col mx-auto p-2 text-[#354765] cursor-pointer hover:text-black"
        }
      >
        <FaFileAlt className=" w-6 h-6 mx-auto " />
        <h1 className="mx-auto p-1  text-xs ">CV</h1>
      </Link>
      <Link
        to={"/contact"}
        className={
          props.route === "/contact"
            ? "flex flex-col mx-auto p-2 text-[#fe655c] cursor-pointer"
            : state.isDark
            ? "flex flex-col mx-auto p-2 text-[#a5b3ce] cursor-pointer hover:text-white"
            : "flex flex-col mx-auto p-2 text-[#354765] cursor-pointer hover:text-black"
        }
      >
        <FaRegCommentDots className=" w-6 h-6 mx-auto " />
        <h1 className="mx-auto p-1  text-xs ">İLETİŞİM</h1>
      </Link>
    </div>
  );
}
