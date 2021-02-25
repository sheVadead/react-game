import React, { useEffect } from "react";
import { connect } from "react-redux";
import { clickCheck } from "../../gameMechanics";
import Cell from "../Cell";
import "./game-field.css";
const GameField = (state) => {
  let field = state.state.initField;
  return (
    <div
      onClick={(event) => {
        const cell = event.target.closest(".game-cell");
        clickCheck(cell, field, event, state);
      }}
      className='game-field__inner'
    >
      {field.map((cell, index) => {
        const sigil = cell.sigil;
        if (state.resume) {
          return <Cell data={index} sigil={sigil} />;
        } else {
          return <Cell data={index} />;
        }
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps)(GameField);
