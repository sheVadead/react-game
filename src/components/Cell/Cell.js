import React, { useEffect } from "react";

import { connect } from "react-redux";
import store from "../../store";
import "./Cell.css";
const Cell = (state) => {
  const { data } = state;
  return (
    <div className='game-cell' data={data}>
      {test(state)}
    </div>
  );
};
const stateToProps = (state) => {
  return { state };
};
const test = (state) => {
  return <span className='cell-sigil'>{state.sigil ? state.sigil : ""}</span>;
};
export default connect(stateToProps)(Cell);
