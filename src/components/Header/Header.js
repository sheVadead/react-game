import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import store from "../../store";
import "./Header.css";
const Header = () => {
  const state = useSelector((state) => state);
  const [currentPlayer, setCurrentPlayer] = useState(state.currentSigil);
  useEffect(() => {
    store.subscribe(() => {
      setCurrentPlayer(store.getState().currentSigil);
    });
  });
  return (
    <div className='header'>
      <div className='current-player'>
        <span className='current-text'>Current Player:</span>{" "}
        <span id='player'>{currentPlayer}</span>
      </div>
    </div>
  );
};
const currentPlayerChange = () => {
  return store.getState().currentSigil;
};

export default Header;
