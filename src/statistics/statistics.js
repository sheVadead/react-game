import React from "react";
import "./statistics.css";
const Statistics = () => {
  const games = JSON.parse(localStorage.getItem("games")) || [];
  console.log(games);
  return (
    <>
      <h2 className='score-title'>Statistics</h2>
      return (
      <table className='statistics-table'>
        <thead>
          <tr>
            <th>Winner:</th>
            <th>Clicks:</th>
          </tr>
        </thead>
        <tbody>
          {games.map((item, index) => {
            return (
              <tr>
                <td>{item.winner}</td>
                <td>{item.clicks}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* <div className={`game game-${index}`}>
            <span className='winner'> Winner: {item.winner}</span>
            <span className='clicks'>Clicks: {item.clicks}</span>
          </div> */}
    </>
  );
};

export default Statistics;
