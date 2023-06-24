import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import postgresql from "../../assets/postgresql.svg";
import django from "../../assets/django-alt.svg";
import react from "../../assets/react.svg";

import { useThemeContext } from "../../hooks/useThemeContext";

export const Project = () => {
  const { state } = useThemeContext();
  const isDarkMode = state.isDark;

  return (
    <div className={`p-2 mb-11 ${isDarkMode ? "" : "bg-white"}`}>
      <div
        className={`container lg:max-w-screen-lg mx-auto rounded-lg ${
          isDarkMode ? "bg-[#1e2738]" : "bg-white"
        }`}
      >
        <div className="flex flex-col md:flex-row mx-auto p-7">
          <div>
            <img
              className="rounded-lg max-w-xs"
              src="https://themes.3rdwavemedia.com/profolio/bs5/assets/images/projects/project-thumb-1.png"
              alt=""
            />
          </div>
          <div className="md:mt-0 mt-2">
            <div className="md:pl-4 pl-0">
              <h1
                className={`font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                } mb-2`}
              >
                Trading App Lorem
              </h1>
              <div
                className={`text-[#a5b3ce] ${
                  isDarkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                libero atque facilis ab soluta eos quaerat, itaque expedita
                beatae! Modi sunt quis nihil beatae repellat deserunt inventore
                enim delectus id.
              </div>
              <h4
                className={`font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                } mb-2`}
              >
                Teknolojiler:
              </h4>
              <ul className="flex flex-row gap-4 mb-2">
                <li>
                  <img className="h-6" src={django} alt="" />
                </li>
                <li>
                  <img className="h-6" src={postgresql} alt="" />
                </li>
                <li>
                  <img className="h-6" src={react} alt="" />
                </li>
              </ul>
              <a
                href=""
                className={`font-bold flex ${
                  isDarkMode ? "text-blue-400" : "text-[#4b91e8]"
                }`}
              >
                Daha Fazla{" "}
                <AiOutlineArrowRight
                  className={`w-4 h-4 m-1 ${
                    isDarkMode ? "text-blue-400" : "text-[#4b91e8]"
                  }`}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row mx-auto p-7">
          <div>
            <img
              className="rounded-lg max-w-xs"
              src="https://themes.3rdwavemedia.com/profolio/bs5/assets/images/projects/project-thumb-11.png"
              alt=""
            />
          </div>
          <div className="md:mt-0 mt-2">
            <div className="md:pl-4 pl-0">
              <h1
                className={`font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                } mb-2`}
              >
                Trading App Lorem
              </h1>
              <div
                className={`text-[#a5b3ce] ${
                  isDarkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
                libero atque facilis ab soluta eos quaerat, itaque expedita
                beatae! Modi sunt quis nihil beatae repellat deserunt inventore
                enim delectus id.
              </div>
              <h4
                className={`font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                } mb-2`}
              >
                Teknolojiler:
              </h4>
              <ul className="flex flex-row gap-4 mb-2">
                <li>
                  <img className="h-6" src={django} alt="" />
                </li>
                <li>
                  <img className="h-6" src={postgresql} alt="" />
                </li>
                <li>
                  <img className="h-6" src={react} alt="" />
                </li>
              </ul>
              <a
                href=""
                className={`font-bold flex ${
                  isDarkMode ? "text-blue-400" : "text-[#4b91e8]"
                }`}
              >
                Daha Fazla{" "}
                <AiOutlineArrowRight
                  className={`w-4 h-4 m-1 ${
                    isDarkMode ? "text-blue-400" : "text-[#4b91e8]"
                  }`}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="pb-7">
          <button
            className={`flex rounded-full font-bold text-white w-400 mx-auto px-6 py-3 ${
              isDarkMode
                ? "bg-[#465981] hover:bg-[#3f5174]"
                : "bg-[#4b91e8] hover:bg-[#3f5174]"
            }`}
          >
            Daha Fazla
            <AiOutlineArrowRight className="text-white w-4 h-4 m-1 " />
          </button>
        </div>
      </div>
    </div>
  );
};
