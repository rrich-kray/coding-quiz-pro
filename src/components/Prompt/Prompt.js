import React from "react";
import "./Prompt.css";

const Prompt = ({ currentScore, changeActivePage }) => {
  // TODO: create prompt that accepts user input then sets currentScore state to localStorage along with username
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
  );
};

export default Prompt;
