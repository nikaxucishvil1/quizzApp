import QuestionBtn from "./QuestionBtn";
import Progress from "./Progress";
import { useState } from "react";
import { VscError } from "react-icons/vsc";
import QuizInProgress from "./QuizInProgress";
import QuizEnded from "./QuizEnded";

const Quiz = (props: {
  activeQuiz: Quiz;
  setActiveQuiz: React.Dispatch<React.SetStateAction<Quiz | null>>;
}) => {
  const { activeQuiz, setActiveQuiz } = props;
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
        />
      ) : (
        <QuizEnded setActiveQuiz={setActiveQuiz} activeQuiz={activeQuiz} />
      )}
    </div>
  );
};

export default Quiz;
