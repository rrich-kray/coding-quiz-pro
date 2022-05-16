import React, { useState } from "react";
import Question from "./components/Question/Question";
import Landing from "./components/Landing/Landing";
import Nav from "./components/Nav/Nav";
import Scores from "./components/Scores/Scores";
import Prompt from "./components/Prompt/Prompt";
import PlayAgain from "./components/PlayAgain/PlayAgain";
import "./index.css";

const App = () => {
  const [seconds, setSeconds] = useState(60);
  const [currentQuestionIndex, changeCurrentQuestionIndex] = useState(0);
  const [currentScore, changeCurrentScore] = useState(0);
  const [activePage, changeActivePage] = useState("landing");
  const [gameOver, setGameOver] = useState(false);

  const renderActivePage = () => {
    if (activePage === "landing") {
      return (
        <Landing
          startTimer={startTimer}
          activePage={activePage}
          changeActivePage={changeActivePage}
        />
      );
    }
    if (activePage === "questions") {
      return (
        <Question
          currentQuestionIndex={currentQuestionIndex}
          changeCurrentQuestionIndex={changeCurrentQuestionIndex}
          currentScore={currentScore}
          changeCurrentScore={changeCurrentScore}
          setSeconds={setSeconds}
          seconds={seconds}
          activePage={activePage}
          changeActivePage={changeActivePage}
          gameOver={gameOver}
          setGameOver={setGameOver}
        />
      );
    }
    if (activePage === "scores")
      return <Scores changeActivePage={changeActivePage} />;
    if (activePage === "game-over")
      return (
        <Prompt
          currentScore={currentScore}
          changeActivePage={changeActivePage}
        />
      );
    if (activePage === "play-again") {
      return (
        <PlayAgain
          changeActivePage={changeActivePage}
          changeCurrentScore={changeCurrentScore}
          setSeconds={setSeconds}
          changeCurrentQuestionIndex={changeCurrentQuestionIndex}
        />
      );
    }
  };

  const startTimer = () => {
    setInterval(() => {
      setSeconds(() => seconds - 1);
    }, 1000);
  };

  return (
    <>
      <div className="main-cointainer">{renderActivePage()}</div>
    </>
  );
};

export default App;
