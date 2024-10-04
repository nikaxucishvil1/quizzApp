"use client";
import Image from "next/image";
import { useState } from "react";
import Header from "./components/header/Header";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [quizName, setQuizName] = useState("Accessibility");

  return (
    <div className="bg-[#F4F6FA] dark:bg-[#313E51]">
      <Header theme={theme} setTheme={setTheme} quiz={quizName} />
    </div>
  );
}
