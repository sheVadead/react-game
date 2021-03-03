import React from "react";
import Cell from "./Cell";

const GameBoard = ({ cells, onClick }) => {
  return (
    <div className='board'>
      {cells.map((cell, i) => {
        return <Cell key={i} value={cell} onClick={() => onClick(i)} />;
      })}
    </div>
  );
};

export default GameBoard;
