import React from "react";
import profile from "../../assets/profile.PNG";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../hooks/useThemeContext";
export const Name = () => {
  const { state } = useThemeContext();
  return (
    <div className="flex flex-col pt-11 p-2">
      <img
        className={
          state.isDark
            ? "absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-40 h-40  p-2 bg-[#1e2738] my-6"
            : "absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-40 h-40  p-2 bg-white my-6"
        }
        src={profile}
        alt="profile"
      />
      <div
        className={
          state.isDark
            ? "container lg:max-w-screen-lg mx-auto  rounded-lg m-11 bg-[#1e2738]"
            : "container lg:max-w-screen-lg mx-auto  rounded-lg m-11 bg-white"
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
            Emrah Şander
          </h1>
          <div className="p-1 text-center">
            <p className={state.isDark ? " text-[#a5b3ce]" : "text-black"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, harum. Sunt eum consectetur beatae ex officia neque
              iure odit deserunt tempora recusandae. Officia, atque. Vel
              molestias qui nostrum labore voluptatem. Laudantium, harum. Sunt
              eum consectetur beatae ex officia neque iure odit deserunt tempora
              recusandae. Officia, atque. Vel molestias qui nostrum labore
              voluptatem.
            </p>
          </div>
        </div>
        <div className="pb-7">
          <Link
            to={"/resume"}
            className="flex rounded-full font-bold text-white w-[150px] mx-auto  px-6 py-3 bg-[#465981] hover:bg-[#3f5174]"
          >
            Görüntüle
            <AiOutlineArrowRight className="text-white w-4 h-4 m-1 " />
          </Link>
        </div>
      </div>
    </div>
  );
};
