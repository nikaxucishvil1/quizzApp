"use client";
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
    <div
      className="w-full bg-[#F4F6FA] h-screen relative overflow-hidden dark:bg-[#313E51] md:p-4 xl:p-10"
      style={{ zIndex: 10 }}
    >
      <div className="z-10 relative md:h-full">
        {loader ? (
          <div className="w-full h-screen flex items-center justify-center">
            <div className="loaderr"></div>
          </div>
        ) : (
          <div
            className="relative md:flex md:flex-col md:w-full md:items-center md:h-full"
            style={{ zIndex: 20 }}
          >
            <Header theme={theme} setTheme={setTheme} quizName={quizName} />
            {activeQuiz ? (
              <Quiz
                theme={theme}
                activeQuiz={activeQuiz}
                setActiveQuiz={setActiveQuiz}
                setQuizName={setQuizName}
              />
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
      {!loader && (
        <div>
          <div
            className="hidden md:block absolute w-[977px] h-[977px] xl:left-[-500px] xl:top-[-300px] left-[-602px] top-[-165px] md:top-[-600px] rounded-[977px] border-[144px] border-[#EDF1F9] dark:border-[#2D3949]"
            style={{ zIndex: 0 }}
          ></div>
          <div
            className="hidden xl:block absolute w-[977px] h-[977px] right-[-602px] bottom-[-165px] xl:bottom-[-300px] xl:right-[-500px] rounded-[977px] border-[144px] border-[#EDF1F9] dark:border-[#2D3949]"
            style={{ zIndex: 0 }}
          ></div>
        </div>
      )}
    </div>
  );
}
