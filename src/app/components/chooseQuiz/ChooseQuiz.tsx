import { GiMaterialsScience } from "react-icons/gi";

const ChooseQuiz = (props: ChoozeQuiz) => {
  const { quizData, setActiveQuiz, setQuizName } = props;
  return (
    <div className="p-4 pt-0 flex flex-col xl:flex-row xl:justify-around md:pt-20 gap-7 md:w-[70%] md:h-full xl:items-center xl:p-0 xl:w-full">
      <div className="xl:h-[50%]">
        <header className="flex flex-col items-start gap-4 xl:gap-7">
          <div className="flex flex-col">
            <span className="rubik text-[#313E51] text-[40px] font-[300] dark:text-[#FFFF] xl:text-[64px]">
              Welcome to the
            </span>
            <span className="rubik text-[#313E51] text-[40px] font-[500] dark:text-[#FFFF] xl:text-[64px]">
              Knowledge Quiz!
            </span>
          </div>
          <span className="rubik italic font-[400] text-[14px] text-[#626C7F] dark:text-[#ABC1E1] md:text-[20px]">
            Pick a subject to get started.
          </span>
        </header>
      </div>
      <main className="flex flex-col gap-4 xl:w-[40%] xl:h-[50%]">
        {quizData.map((quiz) => (
          <button
            key={quiz.quizId}
            onClick={() => {
              setActiveQuiz(quiz);
              setQuizName(quiz.quizName);
            }}
            className="bg-[#FFFF] w-full p-2 rounded-xl md:rounded-3xl flex items-center gap-2 dark:bg-[#3B4D66] md:p-4 md:gap-5"
          >
            <div className="flex items-center justify-center p-1 bg-[#EBF0FF] rounded-md md:p-3">
              <GiMaterialsScience
                color="#306AFF"
                className="md:w-[25px] md:h-[25px]"
              />
            </div>
            <span className="rubik text-[18px] font-[500] text-[#313E51] dark:text-[#FFFF] md:text-[28px]">
              {quiz.quizName}
            </span>
          </button>
        ))}
      </main>
    </div>
  );
};

export default ChooseQuiz;
