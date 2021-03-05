import React, { useEffect } from "react";
import useSound from "use-sound";
import { connect } from "react-redux";
import xSound from "../assets/sound/x-sound.mp3";
import store from "./store";
const Cell = (props) => {
  const [play] = useSound(xSound);
  console.log(props.xColor);
  const style = props.value
    ? `squares ${props.value}-${props.xColor.toLowerCase()}`
    : `squares`;
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
