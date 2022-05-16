import React, { useEffect, useState } from "react";
import "./Scores.css";
import { CSSTransition } from "react-transition-group";

const Scores = ({ changeActivePage }) => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  });

  return (
    <CSSTransition
      in={inProp}
      timeout={1000}
      classNames="scores-transitions"
      unmountOnExit
    >
      <div className="scores-list">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {JSON.parse(localStorage.getItem("scores")).map((score) => (
              <tr>
                <td className="username">{score[0]}</td>
                <td className="user-score">{score[1]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          className="exit-btn"
          onClick={() => changeActivePage("landing")}
        >
          Exit
        </button>
      </div>
    </CSSTransition>
  );
};

export default Scores;
