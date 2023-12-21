import { useEffect, useState } from "react";
import MoonIcon from "../assets/images/icon-moon.svg?react";
import SunIcon from "../assets/images/icon-sun.svg?react";

function Header() {
  const [isDarkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <header className="flex justify-between text-white">
      <h2 className="md:text-4xl mobile:text-2xl tracking-[.55em] font-JoseFinBlod">
        TODO
      </h2>
      {isDarkMode ? (
        <SunIcon
          onClick={() => {
            setDarkMode(!isDarkMode);
          }}
        />
      ) : (
        <MoonIcon
          onClick={() => {
            setDarkMode(!isDarkMode);
          }}
        />
      )}
    </header>
  );
}

export default Header;
