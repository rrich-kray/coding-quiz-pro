import React, { useEffect, useState } from "react";
import Question from "./components/Question/Question";
import Landing from "./components/Landing/Landing";
import Scores from "./components/Scores/Scores";
import Prompt from "./components/Prompt/Prompt";
import PlayAgain from "./components/PlayAgain/PlayAgain";
import "./index.css";
import galaxy from "./images/galaxy.jpg";
import winter from "./images/winter.png";
import jellyfish from "./images/jellyfish.jpg";
import leaves from "./images/leaves.jpg";
import leaves2 from "./images/leaves2.jpg";

const App = () => {
  const [seconds, setSeconds] = useState(60);
  const [currentQuestionIndex, changeCurrentQuestionIndex] = useState(0);
  const [currentScore, changeCurrentScore] = useState(0);
  const [activePage, changeActivePage] = useState("landing");
  const [gameOver, setGameOver] = useState(false);

  const bgs = [galaxy, winter, jellyfish, leaves, leaves2];
  const [currentBgIndex, setBgIndex] = useState(0);

  const bgIndexWrapperFunc = () =>
    currentBgIndex === bgs.length - 1
      ? setBgIndex(0)
      : setBgIndex(() => currentBgIndex + 1);

  const renderActivePage = () => {
    if (activePage === "landing") {
      return (
        <Landing
          activePage={activePage}
          changeActivePage={changeActivePage}
          currentBgIndex={currentBgIndex}
          incrementBgIndex={setBgIndex}
          bgIndexWrapperFunc={bgIndexWrapperFunc}
          key={"landing"}
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
          key={"question"}
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
          key={"prompt"}
        />
      );
    if (activePage === "play-again") {
      return (
        <PlayAgain
          changeActivePage={changeActivePage}
          changeCurrentScore={changeCurrentScore}
          setSeconds={setSeconds}
          changeCurrentQuestionIndex={changeCurrentQuestionIndex}
          key={"play-again"}
        />
      );
    }
  };

  return (
    <div
      className="main-container"
      style={{ backgroundImage: `url(${bgs[currentBgIndex]})` }}
    >
      {renderActivePage()}
    </div>
  );
};

export default App;
