export const handleSubmit = (
  setError: React.Dispatch<React.SetStateAction<boolean>>,
  clientAnswer: string,
  setCheck: React.Dispatch<React.SetStateAction<boolean>>,
  setgoToNext: React.Dispatch<React.SetStateAction<boolean>>,
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>,
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>,
  shownQuestionOBJ: Question | undefined,
  setActiveQuiz: React.Dispatch<React.SetStateAction<Quiz | null>>
) => {
  setError(clientAnswer === "");
  if (clientAnswer !== "") {
    setCheck(true);
    setgoToNext(true);
    setIsDisabled(true);
    setIsSubmitting(true);

    if (clientAnswer === shownQuestionOBJ?.correctAnswer) {
      setActiveQuiz((prev) => {
        if (!prev) {
          return null;
        } else {
          return {
            ...prev,
            correctedAnswer: (prev?.correctedAnswer || 0) + 1,
          };
        }
      });
    }
  }
};

export const handleNextQuestion = (
  setgoToNext: React.Dispatch<React.SetStateAction<boolean>>,
  setCheck: React.Dispatch<React.SetStateAction<boolean>>,
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>,
  setActiveQuiz: React.Dispatch<React.SetStateAction<Quiz | null>>,
  setClientAnswer: React.Dispatch<React.SetStateAction<string>>,
  setFocus: React.Dispatch<React.SetStateAction<string>>
) => {
  setgoToNext(false);
  setCheck(false);
  setIsDisabled(false);
  setActiveQuiz((prev) => {
    if (!prev) {
      return null;
    } else {
      return {
        ...prev,
        activeQuestion: prev.activeQuestion + 1,
      };
    }
  });
  setClientAnswer("");
  setFocus("");
};
