import { GiMaterialsScience } from "react-icons/gi";

const ChooseQuiz = (props: ChoozeQuiz) => {
  const { quizData, setActiveQuiz, setQuizName } = props;
  return (
    <div className="p-4 pt-0 flex flex-col gap-7">
      <header className="flex flex-col items-start gap-1">
        <span className="rubik text-[#313E51] text-[40px] font-[300] dark:text-[#FFFF]">
          Welcome to the
        </span>
        <span className="rubik text-[#313E51] text-[40px] font-[500] dark:text-[#FFFF]">
          Knowledge Quiz!
        </span>
        <span className="rubik italic font-[400] text-[14px] text-[#626C7F] dark:text-[#ABC1E1]">
          Pick a subject to get started.
        </span>
      </header>
      <main className="flex flex-col gap-4">
        {quizData.map((quiz) => (
          <button
            key={quiz.quizId}
            onClick={() => {
              setActiveQuiz(quiz);
              setQuizName(quiz.quizName);
            }}
            className="bg-[#FFFF] w-full p-2 rounded-xl flex gap-2 dark:bg-[#3B4D66]"
          >
            <div className="flex items-center justify-center p-1 bg-[#EBF0FF] rounded-md">
              <GiMaterialsScience color="#306AFF" />
            </div>
            <span className="rubik text-[18px] font-[500] text-[#313E51] dark:text-[#FFFF]">
              {quiz.quizName}
            </span>
          </button>
        ))}
      </main>
    </div>
  );
};

export default ChooseQuiz;
