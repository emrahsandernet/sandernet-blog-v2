import React from "react";
import profile from "../../assets/profile.PNG";
import { AiFillTwitterCircle, AiFillGithub } from "react-icons/ai";
import { BsStackOverflow } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import { useThemeContext } from "../../hooks/useThemeContext";

export const Contacts = () => {
  const { state } = useThemeContext();
  const isDarkMode = state.isDark;
  return (
    <div className="flex flex-col pt-11 p-2">
      <img
        className="absolute top-1/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full w-40 h-40  p-2 bg-[#1e2738] my-6"
        src={profile}
        alt="profile"
      />

      <div
        className={`container lg:max-w-screen-lg mx-auto  rounded-lg m-11 ${
          isDarkMode ? "bg-[#1e2738]" : "bg-white"
        } `}
      >
        <div className="flex flex-col mx-auto p-10">
          <div className="p-1 text-center mt-9">
            <p className={isDarkMode ? "text-[#a5b3ce]" : "text-black"}>
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
        <div className="md:hidden flex-row justify-center gap-10 mb-11 flex">
          <AiFillTwitterCircle className="text-white w-6 h-6 hover:text-blue-500 rounded-full cursor-pointer" />
          <AiFillGithub className="text-white w-6 h-6 hover:text-blue-500  rounded-full cursor-pointer" />
          <RiLinkedinFill className="text-white w-[22px] h-6 hover:text-blue-500 rounded-full cursor-pointer" />
          <BsStackOverflow className="text-white w-6 h-6 hover:text-blue-500  rounded-full cursor-pointer" />
        </div>

        <div>
          <h1
            className={`mx-auto font-bold  text-2xl text-center ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            İletişim Formu
          </h1>
          <form className="flex flex-col md:m-4 p-2">
            <div className="flex md:flex-row  flex-col justify-between gap-2 md:m-2">
              <input
                className={`rounded-md p-3  md:w-1/2 h-12  ${
                  isDarkMode
                    ? "bg-[#273248] focus:outline-none focus:bg-[#465981] text-white"
                    : "bg-white focus:outline-none  border-2 border-[#c2cee1] text-black"
                }`}
                type="text"
                placeholder="Adınız "
              />
              <input
                className={`rounded-md p-3  md:w-1/2 h-12  ${
                  isDarkMode
                    ? "bg-[#273248] focus:outline-none focus:bg-[#465981] text-white"
                    : "bg-white focus:outline-none  border-2 border-[#c2cee1] text-black"
                }`}
                type="text"
                placeholder="Soyadınız"
              />
            </div>

            <div className="flex flex-col md:m-2 my-2">
              <textarea
                className={`rounded-md p-3 w-full h-80  ${
                  isDarkMode
                    ? "bg-[#273248] focus:outline-none focus:bg-[#465981] text-white"
                    : "bg-white focus:outline-none  border-2 border-[#c2cee1] text-black"
                }`}
                type="text"
                placeholder="Mesajınız"
              />
            </div>
            <div className="flex md:m-2">
              <button className="flex justify-center rounded-full p-4 font-bold text-white w-full  px-6 py-2 bg-[#465981] hover:bg-[#3f5174] text-center ">
                Gönder
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
