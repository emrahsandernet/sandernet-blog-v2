import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useThemeContext } from "../../hooks/useThemeContext";
export const Projects = () => {
  const { state } = useThemeContext();
  return (
    <div className="p-2">
      <div
        className={
          state.isDark
            ? "container lg:max-w-screen-lg mx-auto  rounded-lg  bg-[#1e2738] -my-7"
            : "container lg:max-w-screen-lg mx-auto  rounded-lg  bg-white -my-7"
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
            Öne Çıkan Projeler
          </h1>
          <div className="p-1 text-center">
            <p className={state.isDark ? " text-[#a5b3ce]" : "text-black"}>
              Brief intro goes here. My main experience lies in building lorem
              ipsum dolor sit amet, consectetur adipiscing elit. I'm currently
              working on lacinia tristique.
            </p>
          </div>
          <div className="flex md:flex-row flex-col justify-between gap-6 my-4">
            <div className="flex flex-col">
              <img
                src="https://themes.3rdwavemedia.com/profolio/bs5/assets/images/projects/project-thumb-1.png"
                alt="project"
                className="rounded-lg"
              />
              <h1
                className={
                  state.isDark
                    ? "font-bold text-white mt-3"
                    : "font-bold text-black mt-3"
                }
              >
                Trade App
              </h1>
              <p
                className={
                  state.isDark
                    ? "text-[#a5b3ce] text-sm"
                    : "text-gray-600 text-sm"
                }
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                ipsum, quasi sunt deserunt debitis labore, delectus assumenda
                perspiciatis nam id facere eaque. Fugiat, placeat sunt quos qui
                delectus sequi atque.
              </p>
              <a href="" className="font-bold flex text-[#4b91e8]">
                Daha Fazla{" "}
                <AiOutlineArrowRight className="w-4 h-4 m-1 text-[#4b91e8]" />
              </a>
            </div>
            <div>
              <img
                src="https://themes.3rdwavemedia.com/profolio/bs5/assets/images/projects/project-thumb-6.png"
                alt="project"
                className="rounded-lg"
              />
              <h1
                className={
                  state.isDark
                    ? "font-bold text-white mt-3"
                    : "font-bold text-black mt-3"
                }
              >
                Trade App
              </h1>
              <p
                className={
                  state.isDark
                    ? "text-[#a5b3ce] text-sm"
                    : "text-gray-600 text-sm"
                }
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                ipsum, quasi sunt deserunt debitis labore, delectus assumenda
                perspiciatis nam id facere eaque. Fugiat, placeat sunt quos qui
                delectus sequi atque.
              </p>
              <a href="" className="font-bold flex text-[#4b91e8]">
                Daha Fazla{" "}
                <AiOutlineArrowRight className="w-4 h-4 m-1 text-[#4b91e8]" />
              </a>
            </div>
            <div>
              <img
                src="https://themes.3rdwavemedia.com/profolio/bs5/assets/images/projects/project-thumb-4.png"
                alt="project"
                className="rounded-lg"
              />
              <h1
                className={
                  state.isDark
                    ? "font-bold text-white mt-3"
                    : "font-bold text-black mt-3"
                }
              >
                Trade App
              </h1>
              <p
                className={
                  state.isDark
                    ? "text-[#a5b3ce] text-sm"
                    : "text-gray-600 text-sm"
                }
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                ipsum, quasi sunt deserunt debitis labore, delectus assumenda
                perspiciatis nam id facere eaque. Fugiat, placeat sunt quos qui
                delectus sequi atque.
              </p>
              <a href="" className="font-bold flex text-[#4b91e8]">
                Daha Fazla{" "}
                <AiOutlineArrowRight className="w-4 h-4 m-1 text-[#4b91e8]" />
              </a>
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
};
