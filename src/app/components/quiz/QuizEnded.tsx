const QuizEnded = (props: QuizEnded) => {
  const { activeQuiz, setActiveQuiz, setQuizName } = props;
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="rubik text-[40px] font-[300] text-[#313E51] dark:text-[#FFFFFF]">
          Quiz completed
        </h1>
        <h1 className="rubik text-[40px] font-[500] text-[#313E51] dark:text-[#FFFFFF]">
          You scored...
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-3">
        <div className="w-full bg-[#FFFF] flex flex-col items-center justify-center rounded-xl p-4 dark:bg-[#3B4D66]">
          <h1 className="rubik text-[#313E51] font-[500] text-[18px] dark:text-[#FFFFFF]">
            {activeQuiz.quizName}
          </h1>
          <h1 className="rubik text-[#313E51] text-[88px] font-[500] dark:text-[#FFFFFF]">
            {activeQuiz.correctedAnswer}
          </h1>
          <h1 className="rubik text-[#626C7F] text-[18px] font-[400] dark:text-[#ABC1E1]">
            out of {activeQuiz.questions.length}
          </h1>
        </div>
        <button
          onClick={() => {
            setActiveQuiz(null);
            setQuizName("");
          }}
          className="rubik text-[18px] font-[500] bg-[#A729F5] text-[#FFFF] w-full rounded-xl p-3"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default QuizEnded;
