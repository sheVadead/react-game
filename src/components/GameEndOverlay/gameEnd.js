import React from "react";
import { newGame } from "../../actions";
import store from "../../store";
import GameField from "../GameField";
const GameEndOverlay = (props) => {
  console.log(props);
  return (
    <button
      onClick={() => {
        store.dispatch(newGame());
        props.setEndFlag(false);
      }}
    >
      Restart
    </button>
  );
};

export default GameEndOverlay;
