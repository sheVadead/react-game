import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import store from "../../store";
import "./Cell.css";
const Cell = (props) => {
  const state = useSelector((state) => state);
  const { data } = props;
  return (
    <div className='game-cell' data={data}>
      {cellSpan(props)}
    </div>
  );
};

const cellSpan = (props) => {
  return <span className='cell-sigil'>{props.sigil ? props.sigil : ""}</span>;
};
export default Cell;
