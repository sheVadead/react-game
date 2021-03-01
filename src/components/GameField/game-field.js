import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { clicksCount, gameEnd } from "../../actions";
import { clickCheck } from "../../gameMechanics";
import store from "../../store";
import Cell from "../Cell";
import "./game-field.css";
const GameField = (props) => {
  const state = useSelector((state) => state);
  const field = state.initField;
  return (
    <div
      onClick={(event) => {
        store.dispatch(clicksCount());
        const cell = event.target.closest(".game-cell");
        clickCheck(cell, field, event, state);
      }}
      className='game-field__inner'
    >
      {field.map((cell, index) => {
        const sigil = cell.sigil;
        if (props.resume) {
          return <Cell data={index} sigil={sigil} />;
        } else {
          return <Cell data={index} />;
        }
      })}
    </div>
  );
};

export default GameField;
