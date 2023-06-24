import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsTerminal, BsDatabaseCheck, BsInfinity } from "react-icons/bs";
import { useThemeContext } from "../../hooks/useThemeContext";
import redis from "../../assets/redis.svg"
import mongodb from "../../assets/mongodb.svg"
import postgresql from "../../assets/postgresql.svg"
import django from "../../assets/django-alt.svg"
import react from "../../assets/react.svg"
import nodejs from "../../assets/nodejs.svg"
import javascript from "../../assets/javascript.svg"
import bootstrap from "../../assets/bootstrap5.svg";
export const Skill = () => {
  const { state } = useThemeContext();
  return (
    <div className="p-2">
      <div
        className={
          state.isDark
            ? "container lg:max-w-screen-lg mx-auto  rounded-lg  bg-[#1e2738] m-7"
            : "container lg:max-w-screen-lg mx-auto  rounded-lg  bg-white m-7"
        }
      >
        <div className="flex flex-col mx-auto p-10">
          <h1
            className={
              state.isDark
                ? "mx-auto font-bold text-white text-2xl text-center my-4"
                : "mx-auto font-bold text-black text-2xl text-center my-4"
            }
          >
            Yetenekler & Tecrübeler
          </h1>
          <div className="p-1 text-center">
            <p className={state.isDark ? " text-[#a5b3ce]" : "text-gray-600"}>
              Section intro goes here. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. You can replace or add more tech icons below to
              reflect your skillset.
            </p>
          </div>
          <div className="flex md:flex-row flex-col justify-center items-center gap-8 mt-3 ">
            <div className="flex flex-col-3">
              <img
                src={redis}
                alt="project"
                className="rounded-lg w-[80px] h-min"
              />
            </div>
            <div className="flex flex-col-3">
              <img
                src={mongodb}
                alt="project"
                className="rounded-lg w-[80px] h-min"
              />
            </div>
            <div className="flex flex-col-3">
              <img
                src={postgresql}
                alt="project"
                className="rounded-lg w-[80px] h-min"
              />
            </div>
            <div>
              <img
                src={django}
                alt="project"
                className="rounded-lg w-[80px] h-min"
              />
            </div>

            <div>
              <img
                src={react}
                alt="project"
                className="rounded-lg w-[80px] h-min"
              />
            </div>
            <div>
              <img
                src={nodejs}
                alt="project"
                className="rounded-lg w-[80px] h-min"
              />
            </div>
            <div>
              <img
                src={javascript}
                alt="project"
                className="rounded-lg w-[80px] h-min"
              />
            </div>
            <div>
              <img
                src={bootstrap}
                alt="project"
                className="rounded-lg w-[80px] h-min"
              />
            </div>
          </div>
          <div className="pb-7 mt-9">
            <button className="flex rounded-full font-bold text-white w-400 mx-auto  px-6 py-3 bg-[#465981] hover:bg-[#3f5174]">
              Daha Fazla
              <AiOutlineArrowRight className="text-white w-4 h-4 m-1 " />
            </button>
          </div>
          <div className="flex md:flex-row flex-col  gap-8 mt-3">
            <div className="flex flex-col justify-center items-center">
              <div
                className={
                  state.isDark
                    ? "border p-3 rounded-full border-[#465981]"
                    : "border p-3 rounded-full border-[#a5b3ce]"
                }
              >
                <BsTerminal
                  className={
                    state.isDark
                      ? "text-[#a5b3ce] w-8 h-8 m-1"
                      : "text-[#465981] w-8 h-8 m-1"
                  }
                />
              </div>
              <h1
                className={
                  state.isDark
                    ? "mx-auto font-bold text-white text-2xl text-center my-4"
                    : "mx-auto font-bold text-black text-2xl text-center my-4"
                }
              >
                Web Geliştirme
              </h1>
              <div
                className={state.isDark ? "text-[#a5b3ce]" : "text-gray-600"}
              >
                Describe your expertise here. You can change the icon above to
                any of the
              </div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div
                className={
                  state.isDark
                    ? "border p-3 rounded-full border-[#465981]"
                    : "border p-3 rounded-full border-[#a5b3ce]"
                }
              >
                <BsDatabaseCheck
                  className={
                    state.isDark
                      ? "text-[#a5b3ce] w-8 h-8 m-1"
                      : "text-[#465981] w-8 h-8 m-1"
                  }
                />
              </div>
              <h1
                className={
                  state.isDark
                    ? "mx-auto font-bold text-white text-2xl text-center my-4"
                    : "mx-auto font-bold text-black text-2xl text-center my-4"
                }
              >
                Veritabanı Tasarımı
              </h1>
              <div
                className={state.isDark ? "text-[#a5b3ce]" : "text-gray-600"}
              >
                Describe your expertise here. You can change the icon above to
                any of the
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div
                className={
                  state.isDark
                    ? "border p-3 rounded-full border-[#465981]"
                    : "border p-3 rounded-full border-[#a5b3ce]"
                }
              >
                <BsInfinity
                  className={
                    state.isDark
                      ? "text-[#a5b3ce] w-8 h-8 m-1"
                      : "text-[#465981] w-8 h-8 m-1"
                  }
                />
              </div>
              <h1
                className={
                  state.isDark
                    ? "mx-auto font-bold text-white text-2xl text-center my-4"
                    : "mx-auto font-bold text-black text-2xl text-center my-4"
                }
              >
                Sunucu Yönetimi
              </h1>
              <div
                className={state.isDark ? "text-[#a5b3ce]" : "text-gray-600"}
              >
                Describe your expertise here. You can change the icon above to
                any of the
              </div>
            </div>
          </div>
        </div>
        <div className="pb-7">
          <button className="flex rounded-full font-bold text-white w-400 mx-auto  px-6 py-3 bg-[#465981] hover:bg-[#3f5174]">
            Daha Fazla
            <AiOutlineArrowRight className="text-white w-4 h-4 m-1 " />
          </button>
        </div>
      </div>
    </div>
  );
}
