import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../hooks/useThemeContext";

export const Help = () => {
  const { state } = useThemeContext();
  const isDarkMode = state.isDark;

  return (
    <div className={`p-2 mb-11 ${isDarkMode ? "" : "bg-white"}`}>
      <div
        className={`container lg:max-w-screen-lg mx-auto rounded-lg ${
          isDarkMode ? "bg-[#1e2738]" : "bg-white"
        }`}
      >
        <div className="p-7 text-center">
          <h1
            className={`text-[#629feb] font-bold text-3xl ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Projelerinizde yardıma mı ihtiyacınız var?
          </h1>
          <div
            className={`text-[#a5b3ce] my-3 ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui dolor,
            sunt neque quisquam dignissimos nihil laudantium temporibus
            similique a quas tempora tenetur, rerum corrupti! Magnam quaerat
            alias praesentium accusamus soluta?
          </div>
          <div className="pb-7 mt-7">
            <Link
              to="/contact"
              className={`flex rounded-full font-bold text-white w-[190px] mx-auto px-6 py-3 ${
                isDarkMode
                  ? "bg-[#465981] hover:bg-[#3f5174]"
                  : "bg-[#4b91e8] hover:bg-[#3f5174]"
              }`}
            >
              İletişime Geçin
              <AiOutlineArrowRight className="text-white w-4 h-4 m-1 " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
