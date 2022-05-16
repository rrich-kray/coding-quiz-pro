import React from "react";
import "./Nav.css";

const Nav = ({
  changeCurrentScore,
  setSeconds,
  changeCurrentQuestionIndex,
  changeActivePage,
}) => {
  const dropGame = () => {
    changeCurrentScore(0);
    setSeconds(60);
    changeCurrentQuestionIndex(0);
    changeActivePage("landing");
  };

  return (
    <div className="nav">
      <button className="nav-btn" onClick={() => dropGame()}>
        Home
      </button>
      <button className="nav-btn" onClick={() => changeActivePage("scores")}>
        Scores
      </button>
    </div>
  );
};

export default Nav;
