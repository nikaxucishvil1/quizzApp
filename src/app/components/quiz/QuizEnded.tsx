const QuizEnded = (props: QuizEnded) => {
  const { activeQuiz, setActiveQuiz } = props;
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="rubik text-[40px] font-[300] text-[#313E51]">
          Quiz completed
        </h1>
        <h1 className="rubik text-[40px] font-[500] text-[#313E51]">
          You scored...
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-3">
        <div className="w-full bg-[#FFFF] flex flex-col items-center justify-center rounded-xl p-4">
          <h1 className="rubik text-[#313E51] font-[500] text-[18px]">
            {activeQuiz.quizName}
          </h1>
          <h1 className="rubik text-[#313E51] text-[88px] font-[500]">
            {activeQuiz.correctedAnswer}
          </h1>
          <h1 className="rubik text-[#626C7F] text-[18px] font-[400]">
            out of {activeQuiz.questions.length}
          </h1>
        </div>
        <button
          onClick={() => {
            setActiveQuiz(null);
          }}
          className="bg-[#A729F5] text-[#FFFF] w-full rounded-xl p-3"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default QuizEnded;
