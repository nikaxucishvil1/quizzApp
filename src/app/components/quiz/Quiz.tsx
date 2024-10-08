import { useState } from "react";
import QuizInProgress from "./QuizInProgress";
import QuizEnded from "./QuizEnded";
import { VscError } from "react-icons/vsc";

const Quiz = (props: {
  theme: "dark" | "light";
  activeQuiz: Quiz;
  setActiveQuiz: React.Dispatch<React.SetStateAction<Quiz | null>>;
  setQuizName: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { activeQuiz, setActiveQuiz, theme, setQuizName } = props;
  const [goToNext, setgoToNext] = useState(false);
  const [error, setError] = useState(false);
  const [check, setCheck] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [clientAnswer, setClientAnswer] = useState("");

  const shownQuestionOBJ = activeQuiz.questions.find(
    (obj) => obj.questionId === activeQuiz.activeQuestion
  );
  const isFinished = activeQuiz.activeQuestion > activeQuiz.questions.length;

  return (
    <div className="p-4 flex flex-col md:items-center md:w-full  xl:h-full xl:items-center xl:justify-center xl:pt-20">
      {!isFinished ? (
        <div className="w-full md:flex md:flex-col md:items-center md:justify-center ">
          <QuizInProgress
          activeQuiz={activeQuiz}
          check={check}
          clientAnswer={clientAnswer}
          goToNext={goToNext}
          isDisabled={isDisabled}
          setgoToNext={setgoToNext}
          setError={setError}
          setActiveQuiz={setActiveQuiz}
          setCheck={setCheck}
          setClientAnswer={setClientAnswer}
          setIsDisabled={setIsDisabled}
          shownQuestionOBJ={shownQuestionOBJ}
          theme={theme}
        />
        {error && (
          <div className="flex items-center justify-center gap-2 pt-5 xl:w-[70%] xl:justify-end">
            <VscError color="#EE5454" className="w-[24px] h-[24px] md:w-[40px] md:h-[40px]" />
            <span className="rubik text-[#EE5454] text-[18px] font-[400] md:text-[28px]">
              Please select an answer
            </span>
          </div>
        )}
        </div>
        
      ) : (
        <QuizEnded
          setQuizName={setQuizName}
          setActiveQuiz={setActiveQuiz}
          activeQuiz={activeQuiz}
        />
      )}
    </div>
  );
};

export default Quiz;
