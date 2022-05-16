import React from "react";
import "./Prompt.css";

const Prompt = ({ currentScore, changeActivePage }) => {
  // TODO: create prompt that accepts user input then sets currentScore state to localStorage along with username
  const submitScore = (userInput) => {
    localStorage.setItem("scores", JSON.stringify([userInput, currentScore]));
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
