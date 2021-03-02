import React, { useEffect, useState } from "react";
import { calculateWinner } from "./helpers/helpers";
import Board from "./game-board";
import Header from "./header/Header";
const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isGameRestarted, restart] = useState(false);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const xO = xIsNext ? "X" : "O";
  let savedGame = null;
  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const cells = [...current];
    if (winner || cells[i]) return;
    cells[i] = xO;
    setHistory([...historyPoint, cells]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
    localStorage.setItem("savedGame", JSON.stringify(historyPoint.slice(-1)));
  };
  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };
  console.log(savedGame);
  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });
  useEffect(() => {
    savedGame = JSON.parse(localStorage.getItem("savedGame"));
    console.log(savedGame);
  });
  return (
    <>
      <Header isGameRestarted={isGameRestarted} restart={restart} />
      {!isGameRestarted ? (
        <Board
          cells={savedGame ? savedGame : history[stepNumber]}
          onClick={handleClick}
        />
      ) : (
        <Board cells={history[stepNumber]} onClick={handleClick} />
      )}
      <div className='info-wrapper'>
        {/* <div>
          <h3>History</h3>
          {renderMoves()}
        </div> */}
        <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
      </div>
    </>
  );
};

export default Game;
