import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { GoMoon } from "react-icons/go";
import ToggleButton from "../darkModeSwitch/ToggleButton";

const Header = (props: Header) => {
  const { quizName, setTheme, theme } = props;
  return (
    <header
      className={`w-full p-4 flex items-center justify-${
        quizName && quizName !== "" ? "between" : "end"
      }`}
    >
      {quizName && quizName !== "" && (
        <span className="rubik w-full text-[#313E51] font-[500] text-[18px] dark:text-[#FFFFFF]">
          {quizName}
        </span>
      )}
      <div className="flex gap-1 items-center">
        <WiDaySunny
          color={theme === "light" ? "#626C7F" : "#FFFFFF"}
          width={"100%"}
          height={"100%"}
        />
        <ToggleButton setTheme={setTheme} theme={theme} />
        <GoMoon
          color={theme === "light" ? "#626C7F" : "#FFFFFF"}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </header>
  );
};

export default Header;
