import React from "react";
import "./PlayAgain.css";

const PlayAgain = ({
  changeActivePage,
  changeCurrentScore,
  setSeconds,
  changeCurrentQuestionIndex,
}) => {
  const playAgain = (choice) => {
    changeCurrentScore(0);
    setSeconds(60);
    changeCurrentQuestionIndex(0);
    if (choice === "yes") {
      changeActivePage("questions");
      return;
    }
    changeActivePage("landing");
  };
  return (
    <div className="option-container">
      <h2>Play Again?</h2>
      <div className="options">
        <button className="option-btn" onClick={() => playAgain("yes")}>
          Yes
        </button>
        <button className="option-btn" onClick={() => playAgain("no")}>
          No
        </button>
      </div>
    </div>
  );
};

export default PlayAgain;
