import React from "react";
import "./Scores.css";

const Scores = ({ changeActivePage }) => {
  console.log(JSON.parse(localStorage.getItem("scores")));
  return (
    <div className="scores-list">
      <table>
        <tr>
          <th>Username</th>
          <th>Score</th>
        </tr>
        {JSON.parse(localStorage.getItem("scores")).map((score) => (
          <tr>
            <td className="username">{score[0]}</td>
            <td className="user-score">{score[1]}</td>
          </tr>
        ))}
      </table>
      <button className="exit-btn" onClick={() => changeActivePage("landing")}>
        Exit
      </button>
    </div>
  );
};

export default Scores;
