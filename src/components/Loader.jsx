import React from 'react'
import { useThemeContext } from '../hooks/useThemeContext';

export const Loader = () => {
  const { state } = useThemeContext();
    // taiwlind css loader
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div
          className={
            state.isDark
              ? "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"
              : "animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"
          }
        ></div>
      </div>
    </div>
  );
}
