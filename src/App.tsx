import React from "react";
import QuestionBox from "./components/QuestionBox.tsx";
import Result from "./components/Result.tsx";

const QUESTIONS = [
  {
    question: "Какой-то вопрос",
    answers: [
      { text: "неправильный вариант", isRight: false },
      { text: "правильный вариант", isRight: true },
      { text: "неправильный вариант", isRight: false },
      { text: "неправильный вариант", isRight: false },
    ],
  },
  {
    question: "Какой-то вопрос",
    answers: [
      { text: "неправильный вариант", isRight: false },
      { text: "правильный вариант", isRight: true },
      { text: "неправильный вариант", isRight: false },
      { text: "неправильный вариант", isRight: false },
    ],
  },
  {
    question: "Какой-то вопрос",
    answers: [
      { text: "неправильный вариант", isRight: false },
      { text: "правильный вариант", isRight: true },
      { text: "неправильный вариант", isRight: false },
      { text: "неправильный вариант", isRight: false },
    ],
  },
  {
    question: "Какой-то вопрос",
    answers: [
      { text: "неправильный вариант", isRight: false },
      { text: "правильный вариант", isRight: true },
      { text: "неправильный вариант", isRight: false },
      { text: "неправильный вариант", isRight: false },
    ],
  },
  {
    question: "Какой-то вопрос",
    answers: [
      { text: "неправильный вариант", isRight: false },
      { text: "правильный вариант", isRight: true },
      { text: "неправильный вариант", isRight: false },
      { text: "неправильный вариант", isRight: false },
    ],
  },
];

function App() {
  const rightAnswersRef = React.useRef(0);
  const [curQuestion, setCurQuestion] = React.useState(0);
  const [choicedAnswer, setChoicedAnswer] = React.useState(-1);
  const [showResult, setShowResult] = React.useState(false);
  const questionData = QUESTIONS[curQuestion];
  const isLast = curQuestion >= QUESTIONS.length - 1;

  function onNext() {
    if (!isLast && choicedAnswer !== -1) {
      if (questionData.answers[choicedAnswer].isRight)
        rightAnswersRef.current++;

      setChoicedAnswer(-1);
      setCurQuestion(curQuestion + 1);
    } else {
      setShowResult(true);
    }
  }

  function onReset() {
    setChoicedAnswer(-1);
    setCurQuestion(0);
    rightAnswersRef.current = 0;
    setShowResult(false);
  }

  return (
    <div className="bg-neutral-800 w-full h-screen flex items-center justify-center">
      <div className="flex flex-col items-center text-white">
        {showResult ? (
          <Result
            rightAnswers={rightAnswersRef.current}
            allAnswers={QUESTIONS.length}
          />
        ) : (
          <QuestionBox
            choicedAnswer={choicedAnswer}
            setChoicedAnswer={setChoicedAnswer}
            questionData={questionData}
            curQuestion={curQuestion}
          />
        )}
        {!showResult && (
          <button
            onClick={onNext}
            className="border px-8 py-2 rounded-md transition-all hover:bg-neutral-600"
          >
            {isLast ? "Закончить и показать результаты" : "Дальше"}
          </button>
        )}
        {showResult && (
          <button
            onClick={onReset}
            className="border px-8 py-2 rounded-md transition-all hover:bg-neutral-600"
          >
            Заново
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
