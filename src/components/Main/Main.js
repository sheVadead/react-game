import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import store from "../../store";
import GameField from "../GameField";
import GameEndOverlay from "../GameEndOverlay";
import "./Main.css";
const Main = (props) => {
  const [gameEnd, setGameEnd] = useState(store.getState().isGameEnd);
  useEffect(() => {
    store.subscribe(() => {
      const { isGameEnd } = store.getState();
      if (isGameEnd) {
        setGameEnd(true);
      }
    });
  });

  return (
    <div className='game-field'>{handler(gameEnd, props, setGameEnd)}</div>
  );
};
const handler = (gameEnd, props, setGameEnd) => {
  if (!gameEnd) {
    return props.resume ? <GameField resume={true} /> : <GameField />;
  } else {
    return <GameEndOverlay endFlag={gameEnd} setEndFlag={setGameEnd} />;
  }
};
export default Main;
