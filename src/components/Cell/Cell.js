import React, { useEffect } from "react";

import { connect } from "react-redux";
import store from "../../store";
import "./Cell.css";
const Cell = (state) => {
  const { data } = state;
  return (
    <div className='game-cell' data={data}>
      {state.sigil ? state.sigil : ""}
    </div>
  );
};
const stateToProps = (state) => {
  return { state };
};
export default connect(stateToProps)(Cell);
