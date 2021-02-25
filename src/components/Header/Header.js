import React, { useEffect } from "react";
import store from "../../store";
import "./Header.css";
const Header = () => {
  return (
    <div className='header'>
      <div className='current-player'>
        <span className='current-text'>Current Player:</span>{" "}
        <span id='player'>X</span>
      </div>
    </div>
  );
};
// store.subscribe(() => {
//   const player = document.getElementById("player");
//   const state = store.getState();
//   player.textContent = state.currentSigil;
// });
export default Header;
