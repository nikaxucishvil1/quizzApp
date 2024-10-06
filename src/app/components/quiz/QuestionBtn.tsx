import { useState } from "react";
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
    focus,
    setFocus,
  } = props;

  const isCorrectAndAnsweredCorrect =
    check && clientAnswer === correctAnswer && answer === correctAnswer;
  const isFalseAndAnsweredFalse =
    check && clientAnswer === answer && answer !== correctAnswer;

  return (
    <button
      disabled={isDisabled}
      onClick={() => {
        setError(false);
        setClientAnswer(answer);
        setFocus(option);
      }}
      className={`group ${isCorrectAndAnsweredCorrect && "!border-[#26D782]"} ${
        isFalseAndAnsweredFalse && "!border-[#EE5454]"
      } border-[3px] ${
        focus === option ? "border-[#A729F5]" : "border-[#FFFFFF]"
      } flex items-center bg-[#FFFF] dark:bg-[#3B4D66] ${
        focus === option ? "dark:border-[#A729F5]" : "dark:border-[#3B4D66]"
      } rounded-xl md:rounded-3xl p-2 md:p-4 justify-between focus:border-[#A729F5]`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`${
            isCorrectAndAnsweredCorrect && "!bg-[#26D782] text-[#FFFF]"
          } ${
            isFalseAndAnsweredFalse && "!bg-[#EE5454] !text-[#FFFF]"
          } p-1 pl-3 pr-3 md:pl-4  md:pr-4 bg-[#F4F6FA] flex items-center justify-center rounded-md text-[#626C7F] ${
            focus === option && "!bg-[#A729F5]"
          } ${focus !== option && !isDisabled && "group-hover:!bg-[#F6E7FF]"}`}
        >
          <span
            className={`rubik text-[18px] font-[500] md:text-[28px] ${
              focus === option ? "text-[#FFFFFF]" : "text-[#626C7F]"
            } ${
              focus !== option && !isDisabled && "group-hover:!text-[#A729F5]"
            }`}
          >
            {option}
          </span>
        </div>
        <span className="text-[#313E51] text-[18px] font-[500] dark:text-[#FFFFFF] md:text-[28px]">
          {answer}
        </span>
      </div>
      {check && answer === correctAnswer && (
        <CiCircleCheck
          className="w-[24px] h-[24px] md:w-[40px] md:h-[40px]"
          color="#26D782"
        />
      )}
      {check && answer !== correctAnswer && answer === clientAnswer && (
        <VscError
          className="w-[24px] h-[24px] md:w-[40px] md:h-[40px]"
          color="#EE5454"
        />
      )}
    </button>
  );
};

export default QuestionBtn;
