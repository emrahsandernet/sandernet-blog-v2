import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeContext must be used within AuthContextProvider");
  }

  return context;
};
