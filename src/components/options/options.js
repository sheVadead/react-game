import React from "react";
import { useSelector, connect } from "react-redux";
import "./options.css";
import { soundOn } from "../actions/index";
import store from "../store";
const Options = (props) => {
  store.subscribe(() => {});
  return (
    <div className='options'>
      <h2>Options</h2>
      <div className='sound-options'>
        <span className='sound'>Sound</span>
        <input
          type='checkbox'
          onClick={(e) => {
            props.dispatch(soundOn());
            console.log(e.target.checked);
            e.target.checked = props.state.isSound;
          }}
        />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { state };
};
export default connect(mapStateToProps)(Options);
