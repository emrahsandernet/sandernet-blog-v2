import React from "react";
import { useThemeContext } from "../hooks/useThemeContext";

export const Footer = () => {
  const { state } = useThemeContext();
  return (
    <footer
      className={
        state.isDark
          ? "container lg:max-w-screen-lg mx-auto rounded-lg bg-[#1e2738]"
          : "container lg:max-w-screen-lg mx-auto rounded-lg bg-white"
      }
    >
      <div className="w-full mx-auto container md:p-6 p-4 md:flex md:items-center md:justify-center">
        <span
          className={
            state.isDark
              ? "text-sm font-bold text-[#a5b3ce] sm:text-center"
              : "text-sm font-bold text-gray-600 sm:text-center"
          }
        >
          © 2023{" "}
          <a href="https://emrahsander.com" className="hover:underline">
            Sandernet™
          </a>
          . Tüm hakları saklıdır.
        </span>
      </div>
    </footer>
  );
};
