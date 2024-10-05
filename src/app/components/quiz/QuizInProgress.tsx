import { VscError } from "react-icons/vsc";
import QuestionBtn from "./QuestionBtn";
import Progress from "./Progress";
import { useState } from "react";

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
    error,
    theme,
  } = props;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focus, setFocus] = useState("");

  const handleSubmit = () => {
    console.log(clientAnswer);
    setError(clientAnswer === "");

    if (clientAnswer !== "") {
      setCheck(true);
      setgoToNext(true);
      setIsDisabled(true);
      setIsSubmitting(true);

      if (clientAnswer === shownQuestionOBJ?.correctAnswer) {
        setActiveQuiz((prev) => {
          if (!prev) {
            return null;
          } else {
            return {
              ...prev,
              correctedAnswer: (prev?.correctedAnswer || 0) + 1,
            };
          }
        });
      }
    }
  };

  const handleNextQuestion = () => {
    setgoToNext(false);
    setCheck(false);
    setIsDisabled(false);
    setActiveQuiz((prev) => {
      if (!prev) {
        return null;
      } else {
        return {
          ...prev,
          activeQuestion: prev.activeQuestion + 1,
        };
      }
    });
    setClientAnswer("");
    setFocus("")
  };

  return (
    <div className="flex flex-col gap-3">
      <span className="rubik italic text-[14px] text-[#626C7F] dark:text-[#ABC1E1]">
        Question {activeQuiz.activeQuestion} of {activeQuiz.questions.length}
      </span>
      <h1 className="rubik text-[20px] font-[500] text-[#313E51] dark:text-[#FFFFFF]">
        {shownQuestionOBJ?.question}
      </h1>
      <div className="pt-4 pb-4">
        <Progress progress={activeQuiz.activeQuestion * 10} theme={theme} />
      </div>
      <div>
        {shownQuestionOBJ?.answers && (
          <div className="flex flex-col gap-3">
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
                onClick={handleNextQuestion}
                className="tubik font-[500] w-full bg-[#A729F5] text-[18px] text-[#FFFF] p-2 rounded-xl"
              >
                Next Question
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="tubik font-[500] w-full bg-[#A729F5] text-[18px] text-[#FFFF] p-2 rounded-xl"
              >
                Submit
              </button>
            )}
            {error && (
              <div className="flex items-center justify-center gap-2">
                <VscError color="#EE5454" size={20} />
                <span className="rubik text-[#EE5454] text-[18px] font-[400]">
                  Please select an answer
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizInProgress;
