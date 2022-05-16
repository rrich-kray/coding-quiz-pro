import React from "react";
import "./Scores.css";

const Scores = ({ changeActivePage }) => {
  console.log(JSON.parse(localStorage.getItem("scores")));
  return (
    <div className="scores-list">
      {JSON.parse(localStorage.getItem("scores")).map((score) => (
        <div className="user-score">
          <span>{score[0]}</span>
          <span>{score[1]}</span>
        </div>
      ))}
      <button className="exit-btn" onClick={() => changeActivePage("landing")}>
        Exit
      </button>
    </div>
  );
};

export default Scores;
