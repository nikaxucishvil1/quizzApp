import React from "react";
import { WiDaySunny } from "react-icons/wi";
import { GoMoon } from "react-icons/go";
import ToggleButton from "../darkModeSwitch/ToggleButton";

const Header = (props: Header) => {
  const { quizName, setTheme, theme } = props;
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: quizName && quizName !== "" ? "between" : "end",
      }}
      className={`w-full p-4 md:w-[70%] xl:w-full`}
    >
      {quizName && quizName !== "" && (
        <span className="rubik w-full text-[#313E51] font-[500] text-[18px] dark:text-[#FFFFFF] md:text-[28px]">
          {quizName}
        </span>
      )}
      <div className="flex gap-1 items-center md:gap-2 xl:gap-4">
        <WiDaySunny
          color={theme === "light" ? "#626C7F" : "#FFFFFF"}
          className="md:w-[24px] md:h-[24px]"
        />
        <ToggleButton setTheme={setTheme} theme={theme} />
        <GoMoon
          color={theme === "light" ? "#626C7F" : "#FFFFFF"}
          className="md:w-[24px] md:h-[24px]"
        />
      </div>
    </header>
  );
};

export default Header;
