import React from "react";
import "./Scores.css";

const Scores = () => {
  return (
    <div className="scores-list">
      {localStorage.getItem("scores").map((score) => (
        <div className="user-score">
          <span>{score[0]}</span>
          <span>{score[1]}</span>
        </div>
      ))}
    </div>
  );
};

export default Scores;
