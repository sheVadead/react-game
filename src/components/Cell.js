import React, { useEffect, useRef } from "react";
import useSound from "use-sound";
import { connect } from "react-redux";
import xSound from "../assets/sound/x-sound.mp3";
import store from "./store";
const Cell = (props) => {
  const [play] = useSound(xSound);
  const style =
    props.value === "X"
      ? `squares ${props.value}-${props.xColor.toLowerCase()}`
      : props.value === "O"
      ? `squares ${props.value}-${props.oColor.toLowerCase()}`
      : "squares";
  return (
    <div
      className={style}
      onClick={() => {
        props.onClick();
        if (props.isSound) {
          play();
        }
      }}
    >
      {props.value}
    </div>
  );
};
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Cell);
