import React from "react";
import "./Header.css";
const Header = ({ isGameRestarted, restart }) => {
  return (
    <>
      <nav className='nav'>
        <ul className='nav-list'>
          <li
            onClick={() => {
              isGameRestarted = !isGameRestarted;
              restart(isGameRestarted);
            }}
            className='nav-item'
          >
            Restart
          </li>
          <li className='nav-item'>Options</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
