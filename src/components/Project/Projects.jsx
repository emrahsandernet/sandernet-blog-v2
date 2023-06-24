import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import postgresql from "../../assets/postgresql.svg";
import django from "../../assets/django-alt.svg";
import react from "../../assets/react.svg";
import sysimage from "../../assets/construction-workers-sunset.jpg";
import surecimage from "../../assets/4786.jpg";
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
            <img className="rounded-lg max-w-xs " src={sysimage} alt="" />
          </div>
          <div className="md:mt-0 mt-2">
            <div className="md:pl-4 pl-0">
              <h1
                className={`font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                } mb-2`}
              >
                Şantiye Yönetim Yazılımı
              </h1>
              <div
                className={`text-[#a5b3ce] ${
                  isDarkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                Şantiye Yönetim Sistemi, inşaat projelerinde kaynakların etkin
                bir şekilde yönetilmesini, iş süreçlerinin izlenmesini ve
                koordinasyonun sağlanmasını amaçlayan bir yazılım platformudur.
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
            <img className="rounded-lg max-w-xs" src={surecimage} alt="" />
          </div>
          <div className="md:mt-0 mt-2">
            <div className="md:pl-4 pl-0">
              <h1
                className={`font-bold ${
                  isDarkMode ? "text-white" : "text-black"
                } mb-2`}
              >
                Süreç Yönetim Yazılımı
              </h1>
              <div
                className={`text-[#a5b3ce] ${
                  isDarkMode ? "text-gray-400" : "text-gray-700"
                }`}
              >
                Süreç Yönetim Sistemi, bir kuruluşun iş süreçlerini
                planlamasına, takip etmesine ve optimize etmesine yardımcı olan
                bir yazılım platformudur.
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
