import React from "react";
import { Link } from "react-router-dom";
const MainMenu = () => {
  return (
    <div className='main-menu'>
      <ul>
        <li>
          <Link to='/game'>New Game</Link>
        </li>
        <li>
          <Link to='/resume-game'>Resume</Link>
        </li>
        <li>
          <Link to='/options'>Options</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainMenu;
