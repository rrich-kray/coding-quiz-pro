import React from "react";
import "./Infobar.css";

const Infobar = ({ currentScore, seconds }) => {
  return (
    <div className="infobar">
      <div className="score">
        <span>Score:</span>
        {currentScore}
      </div>
      <div className="time-remaining">
        <span>Time Remaining:</span>
        {seconds}
      </div>
    </div>
  );
};

export default Infobar;
