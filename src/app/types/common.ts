interface ToggleBtnProps {
  theme: "dark" | "light";
  setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}

interface Quiz {
  quizId: number;
  quizName: string;
  activeQuestion: number;
  correctedAnswer: number;
  questions: Question[];
}

interface Question {
  questionId: number;
  question: string;
  correctAnswer: string;
  answers: Answers;
}

interface Answers {
  A: string;
  B: string;
  C: string;
  D: string;
}

interface ChoozeQuiz {
  quizData: Quiz[];
  setActiveQuiz: React.Dispatch<React.SetStateAction<Quiz | null>>;
  setQuizName: React.Dispatch<React.SetStateAction<string>>;
}
interface Header {
  quizName?: string;
  setTheme: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  theme: "light" | "dark";
}
interface QuestionBtn {
  answer: string;
  option: string;
  check: boolean;
  correctAnswer: string;
  clientAnswer: string;
  isDisabled: boolean;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setClientAnswer: React.Dispatch<React.SetStateAction<string>>;
  isSubmitting: boolean;
  focus: string;
  setFocus: React.Dispatch<React.SetStateAction<string>>;
}
interface QuizInProgress {
  activeQuiz: Quiz;
  shownQuestionOBJ: Question | undefined;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  setClientAnswer: React.Dispatch<React.SetStateAction<string>>;
  check: boolean;
  clientAnswer: string;
  isDisabled: boolean;
  goToNext: boolean;
  setgoToNext: React.Dispatch<React.SetStateAction<boolean>>;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveQuiz: React.Dispatch<React.SetStateAction<Quiz | null>>;
  error: boolean;
  theme: "light" | "dark";
}
interface QuizEnded {
  setActiveQuiz: React.Dispatch<React.SetStateAction<Quiz | null>>;
  setQuizName: React.Dispatch<React.SetStateAction<string>>;
  activeQuiz: Quiz;
}
