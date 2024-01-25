import React from "react";

interface AnswerData {
  text: string;
  isRight: boolean;
}

interface QuestionData {
  question: string;
  answers: AnswerData[];
}

interface Props {
  curQuestion: number;
  questionData: QuestionData;
  choicedAnswer: number;
  setChoicedAnswer: (answer: number) => void;
}

const QuestionBox = ({
  curQuestion,
  questionData,
  choicedAnswer,
  setChoicedAnswer,
}: Props) => {
  return (
    <div>
      <p className="font-bold text-xl text-center mb-5">
        Вопрос {curQuestion + 1}
      </p>
      <p className="mb-5 text-center">{questionData.question}</p>
      <div className="flex flex-col gap-5 mb-8">
        {questionData.answers.map((answer, index) => (
          <button
            onClick={() => setChoicedAnswer(index)}
            className={
              "border p-2 w-32 rounded-md" +
              (choicedAnswer === index ? " bg-green-400" : "")
            }
            key={index}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionBox;
