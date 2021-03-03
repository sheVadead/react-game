import React, { useEffect } from "react";
import useSound from "use-sound";
import { connect } from "react-redux";
import xSound from "../assets/sound/x-sound.mp3";
import store from "./store";
const Cell = (props) => {
  const [play] = useSound(xSound);
  let isSound = true;
  useEffect(() => {
    console.log(props);
    store.subscribe(() => {
      const state = store.getState();
      isSound = state.isSound;
    });
  }, []);
  const style = props.value ? `squares ${props.value}` : `squares`;
  return (
    <div
      className={style}
      onClick={() => {
        props.onClick();
        if (isSound) {
          play();
        }
      }}
    >
      {props.value}
    </div>
  );
};

export default connect()(Cell);
