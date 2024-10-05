import { CiCircleCheck } from "react-icons/ci";
import { VscError } from "react-icons/vsc";

const QuestionBtn = (props: QuestionBtn) => {
  const {
    answer,
    option,
    setError,
    clientAnswer,
    setClientAnswer,
    check,
    correctAnswer,
    isDisabled,
  } = props;

  const isCorrectAndAnsweredCorrect =
    check && clientAnswer === correctAnswer && answer === correctAnswer;
  const isFalseAndAnsweredFalse =
    check && clientAnswer === answer && answer !== correctAnswer;

  return (
    <button
      disabled={isDisabled}
      onFocus={() => {
        setError(false);
        setClientAnswer(answer);
      }}
      className={`group ${isCorrectAndAnsweredCorrect && "!border-[#26D782]"} ${
        isFalseAndAnsweredFalse && "!border-[#EE5454]"
      } border-[3px] border-[#FFFF] flex items-center bg-[#FFFF] rounded-xl p-2 justify-between focus:border-[3px]  focus:border-[#A729F5]`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`${
            isCorrectAndAnsweredCorrect && "!bg-[#26D782] text-[#FFFF]"
          } ${
            isFalseAndAnsweredFalse && "!bg-[#EE5454] !text-[#FFFF]"
          } p-1 pl-3 pr-3 bg-[#F4F6FA] flex items-center justify-center rounded-md group-focus:bg-[#A729F5] text-[#626C7F] group-focus:text-[#FFFF]`}
        >
          <span className="rubik text-[18px] font-[500]">{option}</span>
        </div>
        <span className="text-[#313E51] text-[18px] font-[500]">{answer}</span>
      </div>
      {check && answer === correctAnswer && (
        <CiCircleCheck size={25} color="#26D782" />
      )}
      {check && answer !== correctAnswer && answer === clientAnswer && (
        <VscError size={25} color="#EE5454" />
      )}
    </button>
  );
};

export default QuestionBtn;
