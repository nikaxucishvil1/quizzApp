import { useState } from "react";
import QuizInProgress from "./QuizInProgress";
import QuizEnded from "./QuizEnded";

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
    <div className="p-4 flex flex-col">
      {!isFinished ? (
        <QuizInProgress
          activeQuiz={activeQuiz}
          check={check}
          clientAnswer={clientAnswer}
          error={error}
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
