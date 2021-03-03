import React, { useState } from "react";
import { calculateWinner } from "./helpers/helpers";
import Board from "./game-board";
import Header from "./header/Header";
const Game = () => {
  const [gameCells, setGameCells] = useState(
    JSON.parse(localStorage.getItem("savedGame")) || Array(9).fill(null)
  );
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(gameCells);
  const [isSound, setSound] = useState(true);
  const xO = xIsNext ? "X" : "O";
  const handleClick = (i) => {
    const cells = gameCells;
    if (winner || cells[i]) return;
    cells[i] = xO;
    setGameCells(cells);
    setXisNext(!xIsNext);
    savingGame(cells);
  };
  const savingGame = (cells) => {
    localStorage.setItem("savedGame", JSON.stringify(cells));
  };

  return (
    <>
      <Header
        restart={setGameCells}
        resetPlayer={setXisNext}
        soundSettings={[isSound, setSound]}
      />
      <div className='info-wrapper'>
        <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
        <div className='competitive'>
          <span className='player-x'>X:</span>
          {localStorage.getItem("X")}
          <span className='player-o'>O:</span>
          {localStorage.getItem("O")}
        </div>
      </div>
      {<Board cells={gameCells} onClick={handleClick} />}
    </>
  );
};

export default Game;
