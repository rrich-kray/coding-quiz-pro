import React, { useEffect, useState } from "react";
import "./Landing.css";
import { CSSTransition } from "react-transition-group";

const Landing = ({
  changeActivePage,
  currentBgIndex,
  incrementBgIndex,
  bgIndexWrapperFunc,
}) => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, [setInProp]);

  return (
    <CSSTransition in={inProp} timeout={500} classNames="example" unmountOnExit>
      <div className="landing-page">
        <button
          className="start-btn btn"
          onClick={() => changeActivePage("questions")}
        >
          Start!
        </button>
        <div className="secondary-btn-container">
          <button
            className="view-scores-btn btn"
            onClick={() => changeActivePage("scores")}
          >
            View high scores
          </button>
          <button
            className="change-bg-btn btn"
            onClick={() => bgIndexWrapperFunc()}
          >
            Change Background!
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Landing;
