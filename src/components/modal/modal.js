import React, { useState, useEffect } from "react";
import "./modal.css";
const ModalWindow = ({ closeModal }) => {
  return (
    <>
      <div
        className='bg'
        onClick={() => {
          closeModal(false);
        }}
      ></div>
      <div className='modal'>
        <h2>Hotkeys:</h2>
        <ul className='hotkeys'>
          <li>Alt+1 - Restart game</li>
          <li>Alt+2 - Options</li>
          <li>Alt+3 - Statistics</li>
          <li>Alt+4 - Main page</li>
          <li>Alt+5 - Rs School</li>
        </ul>
      </div>
    </>
  );
};

export default ModalWindow;
