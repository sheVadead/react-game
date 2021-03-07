import React, { useState, useEffect } from "react";
import { calculateWinner } from "./helpers/helpers";
import Board from "./game-board";
import Header from "./header/Header";
import Footer from "./footer/Footer";
const Game = () => {
  let [xClicks, updateXclicks] = useState(0);
  let [oClicks, updateOclicks] = useState(0);
  const [gameCells, setGameCells] = useState(
    JSON.parse(localStorage.getItem("savedGame")) || Array(9).fill(null)
  );
  const [xIsNext, setXisNext] = useState(
    !JSON.parse(localStorage.getItem("nextPlayer"))
  );

  const winner = calculateWinner(gameCells, { xClicks, oClicks });
  const [isSound, setSound] = useState(true);
  const xO = xIsNext ? "X" : "O";
  const handleClick = (i) => {
    const cells = gameCells;
    if (winner || cells[i]) return;
    cells[i] = xO;
    xO === "X" ? updateXclicks((xClicks += 1)) : updateOclicks((oClicks += 1));
    setGameCells(cells);
    savingGame(cells, xO);
    setXisNext(!JSON.parse(localStorage.getItem("nextPlayer")) || !xIsNext);
  };
  const savingGame = (cells) => {
    localStorage.setItem("nextPlayer", JSON.stringify(xIsNext));
    localStorage.setItem("savedGame", JSON.stringify(cells));
  };
  return (
    <>
      <Header
        autoPlay={autoPlay}
        restart={setGameCells}
        resetPlayer={setXisNext}
        soundSettings={[isSound, setSound]}
      />
      <div className='info-wrapper'>
        <h3>
          {winner
            ? "Winner: " + winner
            : "Next Player: " +
              (!JSON.parse(localStorage.getItem("nextPlayer")) ? "X" : "O")}
        </h3>
        <div className='competitive'>
          <span className='player-x'>X:</span>
          {localStorage.getItem("X")}
          <span className='player-o'>O:</span>
          {localStorage.getItem("O")}
        </div>
      </div>
      {<Board cells={gameCells} onClick={handleClick} />}
      <Footer />
    </>
  );
};
const autoPlay = (interval) => {
  const squares = Array.from(document.querySelectorAll(".squares")).filter(
    (item) => {
      if (item.classList.length === 1) {
        return item;
      }
    }
  );
  if (
    document.querySelector(".board").classList.contains("winner") ||
    squares.length === 0
  ) {
    document.body.classList.remove("block-clicks");
    clearInterval(interval);
  } else {
    randomClick(squares);
  }
};

const randomClick = (squares) => {
  const randomInt = Math.floor(Math.random() * squares.length);
  squares[randomInt].click();
};
export default Game;
