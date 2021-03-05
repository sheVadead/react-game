import React, { useRef, useEffect } from "react";
import { useSelector, connect } from "react-redux";
import "./options.css";
import { soundOn, soundOff, colorChange, colorChangeO } from "../actions/index";
const Options = (props) => {
  const soundCheck = useRef(null);
  const xColor = useRef(null);
  useEffect(() => {
    soundCheck.current.checked = props.state.isSound;
    console.log(xColor);
    xColor.current.childNodes.forEach((item) => {
      if (item.textContent.toLowerCase() === localStorage.getItem("xColor")) {
        console.log(item);
        item.current.selected = true;
      }
    });
  }, []);
  return (
    <div className='options'>
      <h2>Options</h2>
      <div className='sound-options'>
        <span className='sound'>Sound</span>
        <input
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
      </div>

      <div className='color-options'>
        <div className='x-color'>
          <span className='x-text'>Choose X color</span>
          <select
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
          <span className='o-text'>Choose O color</span>
          <select
            onChange={(e) => {
              const color = e.target.value;
              localStorage.setItem("oColor", color);
              props.dispatch(colorChangeO(color));
            }}
            ref={xColor}
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
