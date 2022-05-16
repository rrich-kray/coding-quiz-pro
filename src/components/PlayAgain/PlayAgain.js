import React from "react";
import "./PlayAgain.css";

const PlayAgain = ({
  changeActivePage,
  changeCurrentScore,
  setSeconds,
  changeCurrentQuestionIndex,
}) => {
  const playAgain = () => {
    changeCurrentScore(0);
    setSeconds(60);
    changeCurrentQuestionIndex(0);
    changeActivePage("questions");
  };
  return (
    <div className="option-container">
      <h2>Play Again?</h2>
      <div className="options">
        <button className="option-btn" onClick={() => playAgain()}>
          Yes
        </button>
        <button
          className="option-btn"
          onClick={() => changeActivePage("landing")}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default PlayAgain;
