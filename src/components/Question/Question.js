import React, { useEffect, useState } from "react";
import questions from "./questionData";
import "./Question.css";
import Infobar from "../Infobar/Infobar";
import { CSSTransition } from "react-transition-group";

const Question = ({
  currentQuestionIndex,
  changeCurrentQuestionIndex,
  currentScore,
  changeCurrentScore,
  seconds,
  setSeconds,
  changeActivePage,
  startTimer,
}) => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);

    const interval = setInterval(() => {
      setSeconds(() => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds, setSeconds]);

  const checkAnswer = (e) => {
    if (e.target.textContent === questions[currentQuestionIndex].answer) {
      changeCurrentScore(() => currentScore + 10);
      changeCurrentQuestionIndex(() => currentQuestionIndex + 1);
      if (currentQuestionIndex === questions.length - 1 || seconds === 0) {
        changeActivePage("game-over");
        return;
      }
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
    <CSSTransition
      in={inProp}
      classNames="question"
      timeout={200}
      unmountOnExit
    >
      <div className="quiz-container">
        <Infobar currentScore={currentScore} seconds={seconds} />
        <div className="question-container">
          <h1 className="question">
            {questions[currentQuestionIndex].question}
          </h1>
          <div className="answers-container">
            {questions[currentQuestionIndex].options.map((option) => (
              <button className="answer-btn" onClick={checkAnswer} key={option}>
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Question;
