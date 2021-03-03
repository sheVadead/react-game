import React from "react";
import {Link} from 'react-router-dom'
import "./Header.css";
const Header = ({ restart, resetPlayer }) => {
  return (
    <>
      <nav className='nav'>
        <ul className='nav-list'>
          <li
            onClick={() => {
              localStorage.removeItem("savedGame");
              resetPlayer("O" ? "X" : "X");
              restart(Array(9).fill(null));
              document.querySelector(".board").className = "board";
            }}
            className='nav-item'
          >
            Restart
          </li>
          <li className='nav-item'><Link to='/options'>Options</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
