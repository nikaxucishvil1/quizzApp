"use client";
import { FormGroup } from "@mui/material";
import { AntSwitch } from "./services/createMui";
import { useEffect } from "react";
import { getTheme, toggleTheme } from "./services/getSetTheme";

interface ToggleBtnProps {
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}

const ToggleButton = (props: ToggleBtnProps) => {
  const { theme, setTheme } = props;

  useEffect(() => {
    getTheme(setTheme);
  }, [setTheme, theme]);

  return (
    <FormGroup>
      <AntSwitch
        onChange={() => {
          toggleTheme(theme, setTheme);
        }}
        checked={theme === "dark"}
        inputProps={{ "aria-label": "ant design" }}
      />
    </FormGroup>
  );
};

export default ToggleButton;
