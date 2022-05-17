import React, { useEffect, useState } from "react";
import "./Landing.css";
import { CSSTransition } from "react-transition-group";

const Landing = ({ activePage, changeActivePage, startTimer }) => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  });

  return (
    <CSSTransition in={inProp} timeout={500} classNames="example" unmountOnExit>
      <div className="landing-page">
        <button
          className="start-btn btn"
          onClick={() => changeActivePage("questions")}
        >
          Start!
        </button>
        <button
          className="view-scores-btn btn"
          onClick={() => changeActivePage("scores")}
        >
          View high scores
        </button>
      </div>
    </CSSTransition>
  );
};

export default Landing;
