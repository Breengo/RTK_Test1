import React from "react";

interface Props {
  rightAnswers: number;
  allAnswers: number;
}

const Result = ({ rightAnswers, allAnswers }: Props) => {
  return (
    <div className="flex flex-col gap-5 mb-5">
      <p>Правильных ответов:{rightAnswers}</p>
      <p>Неправильных ответов:{allAnswers - rightAnswers}</p>
      <p>Процент:{(rightAnswers / allAnswers) * 100}%</p>
    </div>
  );
};

export default Result;
