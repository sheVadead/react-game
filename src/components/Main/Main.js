import React from "react";
import { connect } from "react-redux";
import GameField from "../GameField";

import "./Main.css";
const Main = (state) => {
  return (
    <div className='game-field'>
      {state.resume ? <GameField resume={true} /> : <GameField />}
    </div>
  );
};
const stateToProps = (state) => {
  return { state };
};
export default connect(stateToProps)(Main);
