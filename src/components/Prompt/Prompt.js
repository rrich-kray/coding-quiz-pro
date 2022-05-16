import React, { useState, useEffect } from "react";
import "./Prompt.css";
import { CSSTransition } from "react-transition-group";

const Prompt = ({ currentScore, changeActivePage }) => {
  const [inProp, setInProp] = useState(false);
  useEffect(() => {
    setInProp(true);
  });

  const submitScore = (userInput) => {
    if (!localStorage.getItem("scores")) {
      const newScoresObj = [];
      localStorage.setItem("scores", JSON.stringify(newScoresObj));
    }
    const scoresObj = [userInput, currentScore];
    const scores = JSON.parse(localStorage.getItem("scores"));
    scores.push(scoresObj);
    localStorage.setItem("scores", JSON.stringify(scores));
    changeActivePage("play-again");
  };

  return (
    <CSSTransition
      in={inProp}
      timeout={200}
      classNames="prompt-transition"
      unmountOnExit
    >
      <div className="prompt">
        <label htmlFor="username">Please enter your username:</label>
        <input name="username" className="username"></input>
        <button
          className="user-submit-btn"
          onClick={() => submitScore(document.querySelector(".username").value)}
        >
          Submit
        </button>
      </div>
    </CSSTransition>
  );
};

export default Prompt;
