import React from "react";
import "./Landing.css";

const Landing = ({ activePage, changeActivePage, startTimer }) => {
  return (
    <div className="landing-page">
      <button
        className="start-btn"
        onClick={() => changeActivePage("questions")}
      >
        Start!
      </button>
    </div>
  );
};

export default Landing;
