import { VscError } from "react-icons/vsc";
import QuestionBtn from "./QuestionBtn";
import Progress from "./Progress";

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
  } = props;
  return (
    <div className="flex flex-col gap-3">
      <span className="rubik italic text-[14px] text-[#626C7F] dark:text-[#ABC1E1]">
        Question {activeQuiz.activeQuestion} of {activeQuiz.questions.length}
      </span>
      <h1 className="rubik text-[20px] font-[500] text-[#313E51]">
        {shownQuestionOBJ?.question}
      </h1>
      <div className="pt-4 pb-4">
        <Progress progress={activeQuiz.activeQuestion * 10} />
      </div>
      <div>
        {shownQuestionOBJ?.answers && (
          <div className="flex flex-col gap-3">
            <QuestionBtn
              answer={shownQuestionOBJ.answers.A}
              option={"A"}
              setError={setError}
              setClientAnswer={setClientAnswer}
              check={check}
              correctAnswer={shownQuestionOBJ.correctAnswer}
              clientAnswer={clientAnswer}
              isDisabled={isDisabled}
            />
            <QuestionBtn
              answer={shownQuestionOBJ.answers.B}
              option={"B"}
              setError={setError}
              setClientAnswer={setClientAnswer}
              check={check}
              correctAnswer={shownQuestionOBJ.correctAnswer}
              clientAnswer={clientAnswer}
              isDisabled={isDisabled}
            />
            <QuestionBtn
              answer={shownQuestionOBJ.answers.C}
              option={"C"}
              setError={setError}
              setClientAnswer={setClientAnswer}
              check={check}
              correctAnswer={shownQuestionOBJ.correctAnswer}
              clientAnswer={clientAnswer}
              isDisabled={isDisabled}
            />
            <QuestionBtn
              answer={shownQuestionOBJ.answers.D}
              option={"D"}
              setError={setError}
              setClientAnswer={setClientAnswer}
              check={check}
              correctAnswer={shownQuestionOBJ.correctAnswer}
              clientAnswer={clientAnswer}
              isDisabled={isDisabled}
            />

            {goToNext ? (
              <button
                onClick={() => {
                  setgoToNext(false);
                  setCheck(false);
                  setIsDisabled(false);
                  setActiveQuiz((prev) => {
                    if (!prev) {
                      return null;
                    }
                    return {
                      ...prev,
                      activeQuestion: prev.activeQuestion + 1,
                    };
                  });
                }}
                className="w-full bg-[#A729F5] text-[18px] text-[#FFFF] p-2 rounded-xl"
              >
                Next Question
              </button>
            ) : (
              <button
                onClick={() => {
                  clientAnswer === "" && setError(true);
                  setCheck(true);
                  setgoToNext(true);
                  setIsDisabled(true);
                  if (clientAnswer === shownQuestionOBJ.correctAnswer) {
                    setActiveQuiz((prev) => {
                      if (!prev) {
                        return null;
                      }
                      return {
                        ...prev,
                        correctedAnswer: prev.correctedAnswer + 1,
                      };
                    });
                  }
                }}
                className="w-full bg-[#A729F5] text-[18px] text-[#FFFF] p-2 rounded-xl"
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
