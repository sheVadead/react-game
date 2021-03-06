import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = ({ restart, resetPlayer, autoPlay }) => {
  let interval;
  return (
    <>
      <nav className='nav'>
        <ul className='nav-list'>
          <li
            onClick={() => {
              localStorage.removeItem("savedGame");
              resetPlayer(true);
              restart(Array(9).fill(null));
              document.querySelector(".board").className = "board";
            }}
            className='nav-item'
          >
            Restart
          </li>
          <li
            className='nav-item'
            onClick={() => {
              interval = setInterval(() => {
                autoPlay(interval);
              }, 1000);
            }}
          >
            Autoplay
          </li>
          <li className='nav-item'>
            <Link to='/options'>Options</Link>
          </li>
          <li className='nav-item'>
            {" "}
            <Link to='/statistics'>Statistics</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
