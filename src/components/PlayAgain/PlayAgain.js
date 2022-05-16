import React from "react";
import "./PlayAgain.css";

const PlayAgain = ({ changeActivePage }) => {
  return (
    <div className="option-container">
      <h2>Play Again?</h2>
      <div className="options">
        <button className="option-btn">Yes</button>
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
