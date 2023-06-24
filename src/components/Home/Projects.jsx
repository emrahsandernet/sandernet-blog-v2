import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useThemeContext } from "../../hooks/useThemeContext";
import sysimage from "../../assets/33910.jpg";
import surecimage from "../../assets/4786.jpg";
import aiimage from "../../assets/ai.jpg";

export const Projects = () => {
  const { state } = useThemeContext();
  return (
    <div className="p-2">
      <div
        className={
          state.isDark
            ? "container lg:max-w-screen-lg mx-auto rounded-lg bg-[#1e2738] -my-7"
            : "container lg:max-w-screen-lg mx-auto rounded-lg bg-white -my-7"
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
            <p className={state.isDark ? "text-[#a5b3ce]" : "text-black"}>
              Projelerin tamamı başarıyla tamamlanmış ve benzersiz değerler
              sunan projelerdir, müşteri gereksinimlerini karşılamak için
              yaratıcı çözümler sunarak olumlu etkiler yaratırlar
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
            <div className="flex flex-col">
              <img
                src={sysimage}
                alt="project"
                className="rounded-lg h-64 object-cover"
              />
              <h1
                className={
                  state.isDark
                    ? "font-bold text-white mt-3"
                    : "font-bold text-black mt-3"
                }
              >
                Şantiye Yönetim Sistemi
              </h1>
              <p
                className={
                  state.isDark
                    ? "text-[#a5b3ce] text-sm"
                    : "text-gray-600 text-sm"
                }
              >
                Şantiye Yönetim Sistemi, inşaat projelerinde kaynakların etkin
                bir şekilde yönetilmesini, iş süreçlerinin izlenmesini ve
                koordinasyonun sağlanmasını amaçlayan bir yazılım platformudur.
              </p>
              <a href="/contact" className="font-bold flex text-[#4b91e8]">
                Daha Fazla
                <AiOutlineArrowRight className="w-4 h-4 m-1 text-[#4b91e8]" />
              </a>
            </div>
            <div className="flex flex-col">
              <img
                src={surecimage}
                alt="project"
                className="rounded-lg h-64 object-cover"
              />
              <h1
                className={
                  state.isDark
                    ? "font-bold text-white mt-3"
                    : "font-bold text-black mt-3"
                }
              >
                Süreç Yönetim Sistemi
              </h1>
              <p
                className={
                  state.isDark
                    ? "text-[#a5b3ce] text-sm"
                    : "text-gray-600 text-sm"
                }
              >
                Süreç Yönetim Sistemi, bir kuruluşun iş süreçlerini
                planlamasına, takip etmesine ve optimize etmesine yardımcı olan
                bir yazılım platformudur.
              </p>
              <a href="/contact" className="font-bold flex text-[#4b91e8]">
                Daha Fazla{" "}
                <AiOutlineArrowRight className="w-4 h-4 m-1 text-[#4b91e8]" />
              </a>
            </div>
            <div className="flex flex-col">
              <img
                src={aiimage}
                alt="project"
                className="rounded-lg h-64 object-cover"
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
              <a href="/contact" className="font-bold flex text-[#4b91e8]">
                Daha Fazla{" "}
                <AiOutlineArrowRight className="w-4 h-4 m-1 text-[#4b91e8]" />
              </a>
            </div>
          </div>
        </div>
        <div className="pb-7"></div>
      </div>
    </div>
  );
};
