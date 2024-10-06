const QuizEnded = (props: QuizEnded) => {
  const { activeQuiz, setActiveQuiz, setQuizName } = props;
  return (
    <div className="flex flex-col gap-8 md:w-[70%] xl:flex-row xl:w-full">
      <div className="xl:w-full xl:flex xl:flex-col">
        <h1 className="rubik text-[40px] font-[300] text-[#313E51] dark:text-[#FFFFFF] md:text-[64px]">
          Quiz completed
        </h1>
        <h1 className="rubik text-[40px] font-[500] text-[#313E51] dark:text-[#FFFFFF] md:text-[64px]">
          You scored...
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-3 md:gap-10">
        <div className="w-full bg-[#FFFF] flex flex-col items-center justify-center rounded-xl md:rounded-3xl p-4 md:p-7 dark:bg-[#3B4D66] xl:gap-8">
          <h1 className="rubik text-[#313E51] font-[500] text-[18px] dark:text-[#FFFFFF] md:text-[28px]">
            {activeQuiz.quizName}
          </h1>
          <h1 className="rubik text-[#313E51] text-[88px] font-[500] dark:text-[#FFFFFF] md:text-[144px]">
            {activeQuiz.correctedAnswer}
          </h1>
          <h1 className="rubik text-[#626C7F] text-[18px] font-[400] dark:text-[#ABC1E1] md:text-[24px]">
            out of {activeQuiz.questions.length}
          </h1>
        </div>
        <button
          onClick={() => {
            setActiveQuiz(null);
            setQuizName("");
          }}
          className="rubik hoverBg text-[18px] font-[500] bg-[#A729F5] text-[#FFFF] w-full rounded-xl p-3 md:rounded-3xl md:text-[28px] md:p-5"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default QuizEnded;
