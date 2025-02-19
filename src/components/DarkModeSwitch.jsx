import React from "react";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system"? systemTheme : theme;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? (
        <BsFillMoonFill className="text-2xl hover:text-amber-500" />
      ) : (
        <MdLightMode className="text-2xl hover:text-amber-500" />
      )}
    </button>
  );
}
