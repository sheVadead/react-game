import React, { useRef, useEffect } from "react";
import { useSelector, connect } from "react-redux";
import "./options.css";

import { soundOn, soundOff, colorChange, colorChangeO } from "../actions/index";
import { setDefaultColor } from "../helpers/functions";
const Options = (props) => {
  const soundCheck = useRef(null);
  const xColor = useRef(null);
  const oColor = useRef(null);
  useEffect(() => {
    soundCheck.current.checked = props.state.isSound;
    setDefaultColor(xColor);
    setDefaultColor(oColor);
  }, []);
  return (
    <div className='options'>
      <h2>Options</h2>
      <div className='sound-options'>
        <span className='sound'>Sound</span>
        <input
          id='switch'
          ref={soundCheck}
          type='checkbox'
          onChange={(e) => {
            if (e.target.checked) {
              props.dispatch(soundOn());
            } else {
              props.dispatch(soundOff());
            }
            e.target.checked = props.state.isSound;
          }}
        />
        <label htmlFor='switch'>Toggle</label>
      </div>

      <div className='color-options'>
        <div className='x-color'>
          <span className='x-text'>X color</span>
          <select
            id='X-color'
            onChange={(e) => {
              const color = e.target.value;
              localStorage.setItem("xColor", color);
              props.dispatch(colorChange(color));
            }}
            ref={xColor}
            className='color'
          >
            <option>Red</option>
            <option>Blue</option>
            <option>Purple</option>
          </select>
        </div>

        <div className='o-color'>
          <span className='o-text'>O color</span>
          <select
            id='O-color'
            onChange={(e) => {
              const color = e.target.value;
              localStorage.setItem("oColor", color);
              props.dispatch(colorChangeO(color));
            }}
            ref={oColor}
            className='color'
          >
            <option>Yellow</option>
            <option>Green</option>
            <option>Brown</option>
          </select>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { state };
};
export default connect(mapStateToProps)(Options);
