import { currentStep, changePlayer, gameEnd } from "./actions";
import React from "react";
import store from "./store";
const clickCheck = (cell, field, event, state) => {
  const isClicked =
    field[cell.getAttribute("data")] &&
    field[cell.getAttribute("data")].isClicked;
  if (!isClicked) {
    const targetCell = event.target.closest(".game-cell");
    const targetSpan = targetCell.querySelector("span");
    targetCell.classList.add("chosen");
    targetSpan.textContent = state.currentSigil;
    store.dispatch(currentStep(event));
    store.dispatch(changePlayer());
  } else {
    setTimeout(() => cell.classList.remove("clicked"), 1000);
    cell.classList.add("clicked");
    return;
  }

  return isClicked;
};

const winCheckHandler = () => {
  const { currentSigil } = store.getState();
  const currentField = store.getState().initField;

  const horizontal = [0, 3, 6].map((i) => {
    return [i, i + 1, i + 2];
  });

  const vertical = [0, 1, 2].map((i) => {
    return [i, i + 3, i + 6];
  });

  const diagonal = [
    [0, 4, 8],
    [2, 4, 6],
  ];

  const allwins = [...vertical, ...horizontal, ...diagonal];

  let winSequence;

  let res = allwins.some((sequence) => {
    const winner =
      currentField[sequence[0]].sigil == currentSigil &&
      currentField[sequence[1]].sigil == currentSigil &&
      currentField[sequence[2]].sigil == currentSigil;

    if (winner) {
      winSequence = sequence;
      return winner;
    }
  });

  return [res, winSequence];
};

const endGameHandler = (state) => {
  const winner = winCheckHandler();
  let [res] = winner;
  if (res) {
    winSequenceLine(winner);
    console.log("WINNER", state.currentSigil);
    unsubscribe();
    store.dispatch(gameEnd());
  }
};

const winSequenceLine = (winArray) => {
  const [, winLine] = winArray;
  if (winLine[1] - winLine[0] === 1) {
    document
      .querySelector(".game-field__inner")
      .classList.add(`h${winLine[0]}`);
  } else if (winLine[1] - winLine[0] === 3) {
    document
      .querySelector(".game-field__inner")
      .classList.add(`v${winLine[0]}`);
  } else {
    document
      .querySelector(".game-field__inner")
      .classList.add(`d${winLine[0]}`);
  }
};
const checkIfWin = () => {
  const currentState = store.getState();
  console.log(currentState);
  endGameHandler(currentState);
};
const unsubscribe = store.subscribe(checkIfWin);

export {
  clickCheck,
  endGameHandler,
  winSequenceLine,
  winCheckHandler,
  checkIfWin,
};
