import { VscError } from "react-icons/vsc";
import QuestionBtn from "./QuestionBtn";
import Progress from "./Progress";
import { useState } from "react";
import {
  handleNextQuestion,
  handleSubmit,
} from "./services/quizInProgress.service";

const QuizInProgress = (props: QuizInProgress) => {
  const {
    activeQuiz,
    shownQuestionOBJ,
    setError,
    setClientAnswer,
    check,
    clientAnswer,
    isDisabled,
    goToNext,
    setgoToNext,
    setCheck,
    setIsDisabled,
    setActiveQuiz,
    theme,
  } = props;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focus, setFocus] = useState("");

  return (
    <div className="flex flex-col gap-3 md:w-[70%] xl:flex-row xl:w-full xl:items-center xl:justify-between xl:gap-20">
      <div className="flex flex-col gap-4 xl:w-full xl:h-full xl:justify-between xl:pb-20">
        <div className="flex flex-col gap-5">
          <span className="rubik italic text-[14px] text-[#626C7F] dark:text-[#ABC1E1] md:text-[20px]">
            Question {activeQuiz.activeQuestion} of{" "}
            {activeQuiz.questions.length}
          </span>
          <h1 className="rubik text-[20px] font-[500] text-[#313E51] dark:text-[#FFFFFF] md:text-[36px]">
            {shownQuestionOBJ?.question}
          </h1>
        </div>
        <div className="pt-4 pb-4">
          <Progress progress={activeQuiz.activeQuestion * 20} theme={theme} />
        </div>
      </div>
      <div className="xl:w-full">
        {shownQuestionOBJ?.answers && (
          <div className="flex flex-col gap-3 md:gap-7">
            {Object.entries(shownQuestionOBJ.answers).map(([key, answer]) => (
              <QuestionBtn
                key={key}
                answer={answer}
                option={key}
                setError={setError}
                setClientAnswer={setClientAnswer}
                check={check}
                correctAnswer={shownQuestionOBJ.correctAnswer}
                clientAnswer={clientAnswer}
                isDisabled={isDisabled}
                isSubmitting={isSubmitting}
                focus={focus}
                setFocus={setFocus}
              />
            ))}
            {goToNext ? (
              <button
                onClick={() =>
                  handleNextQuestion(
                    setgoToNext,
                    setCheck,
                    setIsDisabled,
                    setActiveQuiz,
                    setClientAnswer,
                    setFocus
                  )
                }
                className="tubik hoverBg font-[500] w-full bg-[#A729F5] text-[18px] text-[#FFFF] p-2 rounded-xl md:text-[28px] md:rounded-3xl md:p-5"
              >
                Next Question
              </button>
            ) : (
              <button
                onClick={() =>
                  handleSubmit(
                    setError,
                    clientAnswer,
                    setCheck,
                    setgoToNext,
                    setIsDisabled,
                    setIsSubmitting,
                    shownQuestionOBJ,
                    setActiveQuiz
                  )
                }
                className="tubik hoverBg font-[500] w-full bg-[#A729F5] text-[18px] text-[#FFFF] p-2 rounded-xl md:text-[28px] md:rounded-3xl md:p-5"
              >
                Submit
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizInProgress;
