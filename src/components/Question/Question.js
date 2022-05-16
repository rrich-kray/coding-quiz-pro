import React from "react";
import questions from "./questionData";
import "./Question.css";
import Infobar from "../Infobar/Infobar";

const Question = ({
  currentQuestionIndex,
  changeCurrentQuestionIndex,
  currentScore,
  changeCurrentScore,
  seconds,
  setSeconds,
  changeActivePage,
}) => {
  const checkAnswer = (e) => {
    if (e.target.textContent === questions[currentQuestionIndex].answer) {
      changeCurrentScore(() => currentScore + 10);
      changeCurrentQuestionIndex(() => currentQuestionIndex + 1);
      return;
    }

    changeCurrentQuestionIndex(() => currentQuestionIndex + 1);
    changeCurrentScore(() => currentScore - 10);
    setSeconds(() => seconds - 10);

    if (currentQuestionIndex === questions.length - 1 || seconds === 0) {
      changeActivePage("game-over");
      return;
    }
  };

  return (
    <div className="quiz-container">
      <Infobar currentScore={currentScore} seconds={seconds} />
      <div className="question-container">
        <h1 className="question">{questions[currentQuestionIndex].question}</h1>
        <div className="answers-container">
          {questions[currentQuestionIndex].options.map((option) => (
            <button className="answer-btn" onClick={checkAnswer} key={option}>
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
