import React from "react";
import { Link } from "react-router-dom";
import { BsFillMoonFill, BsFillSunFill, BsStackOverflow } from "react-icons/bs";
import {
  AiOutlineMenu,
  AiFillTwitterCircle,
  AiFillGithub,
} from "react-icons/ai";
import { useThemeContext } from "../hooks/useThemeContext";
import { RiLinkedinFill } from "react-icons/ri";

const Navbar = (props) => {
  const { dispatch, state } = useThemeContext();

  return (
    // navbar with tailwindcss
    <nav className="flex items-center justify-between flex-wrap p-4">
      <div className="flex flex-row gap-6">
        <button
          onClick={() => {
            props.setIsOpen(!props.isOpen);
            console.log(props.isOpen);
          }}
        >
          <AiOutlineMenu
            className={
              state.isDark ? "text-white w-6 h-6" : "text-[#354765] w-6 h-6"
            }
          />
        </button>
        <div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={state.isDark}
              onChange={() => {
                state.isDark
                  ? dispatch({ type: "LIGHT" })
                  : dispatch({ type: "DARK" });
              }}
            />
            <div
              className={
                state.isDark
                  ? "w-13 h-7 bg-transparent peer-focus:outline-none p peer-focus border-2 border-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all flex"
                  : "w-13 h-7 bg-transparent peer-focus:outline-none p peer-focus border-2 border-[#354765] rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-[#354765] after:border-gray-100 after:border after:rounded-full after:h-6 after:w-6 after:transition-all flex"
              }
            >
              <BsFillSunFill
                className={
                  state.isDark
                    ? "text-white w-4 my-1 mx-1"
                    : "text-[#354765] w-4 my-1 mx-1"
                }
              />
              <BsFillMoonFill
                className={
                  state.isDark
                    ? "text-white w-4 my-1 mx-1"
                    : "text-[#354765] w-4 my-1 mx-1"
                }
              />
            </div>
          </label>
        </div>
      </div>
      <div className="flex items-center justify-between gap-6 hidden sm:flex">
        <a href="https://twitter.com/emrahsander">
          <AiFillTwitterCircle
            className={
              state.isDark
                ? "text-white w-6 h-6 hover:text-blue-500 rounded-full cursor-pointer"
                : "text-[#354765] w-6 h-6 hover:text-blue-500 rounded-full cursor-pointer"
            }
          />
        </a>
        <a href="https://github.com/emrahsandernet">
          <AiFillGithub
            className={
              state.isDark
                ? "text-white w-6 h-6 hover:text-blue-500 rounded-full cursor-pointer"
                : "text-[#354765] w-6 h-6 hover:text-blue-500 rounded-full cursor-pointer"
            }
          />
        </a>
        <a href="https://www.linkedin.com/in/emrah-%C5%9Fander-984274105/">
          <RiLinkedinFill
            className={
              state.isDark
                ? "text-white w-6 h-6 hover:text-blue-500 rounded-full cursor-pointer"
                : "text-[#354765] w-6 h-6 hover:text-blue-500 rounded-full cursor-pointer"
            }
          />
        </a>
        <a href="https://stackoverflow.com/users/18009995/emrah-%c5%9eander">
          <BsStackOverflow
            className={
              state.isDark
                ? "text-white w-6 h-6 hover:text-blue-500 rounded-full cursor-pointer"
                : "text-[#354765] w-6 h-6 hover:text-blue-500 rounded-full cursor-pointer"
            }
          />
        </a>
      </div>
      <div>
        <Link
          to={"/contact"}
          className="rounded-full py-2 px-4 text-white font-bold bg-[#fe655c] hover:bg-[#fe746c]"
        >
          İletişim
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
