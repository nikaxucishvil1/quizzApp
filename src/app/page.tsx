"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import quizDataDb from "./db/quiz.json";
import ChooseQuiz from "./components/chooseQuiz/ChooseQuiz";
import Quiz from "./components/quiz/Quiz";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [quizName, setQuizName] = useState("");
  const [quizData] = useState(quizDataDb);
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const res = localStorage.getItem("quiz");
    if (res) {
      const data = JSON.parse(res);
      setActiveQuiz(data);
      setQuizName(data.quizName);
    }
  }, []);

  useEffect(() => {
    if (activeQuiz) {
      localStorage.setItem("quiz", JSON.stringify(activeQuiz));
    } else {
      localStorage.removeItem("quiz");
    }
    setLoader(false);
  }, [activeQuiz]);

  return (
    <div className="w-full">
      {loader ? (
        <div className="w-full h-screen flex items-center justify-center">
          <div className="loaderr"></div>
        </div>
      ) : (
        <div className="bg-[#F4F6FA] dark:bg-[#313E51] h-screen">
          <Header theme={theme} setTheme={setTheme} quizName={quizName} />
          {activeQuiz ? (
            <Quiz activeQuiz={activeQuiz} setActiveQuiz={setActiveQuiz} />
          ) : (
            <ChooseQuiz
              quizData={quizData}
              setActiveQuiz={setActiveQuiz}
              setQuizName={setQuizName}
            />
          )}
        </div>
      )}
    </div>
  );
}
