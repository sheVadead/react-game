export function calculateWinner(cells, clicksCount) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      addWinLine(lines[i]);
      const games = JSON.parse(localStorage.getItem("games")) || [];
      if (cells[a] === "X") {
        games.push({ winner: "X", clicks: clicksCount.xClicks });
      } else {
        games.push({ winner: "O", clicks: clicksCount.oClicks });
      }
      if (games.length > 10) {
        games.shift();
      }
      let winCount = +localStorage.getItem(`${cells[a]}`);
      localStorage.setItem(`${cells[a]}`, (winCount += 1));
      localStorage.setItem("games", JSON.stringify(games));
      return cells[a];
    }
  }
  return null;
}

const addWinLine = (line) => {
  setTimeout(() => {
    const field = document.querySelector(".board");
    if (line[1] - line[0] === 3) {
      field.classList.add("v", `v${line[0]}`, "full");
    } else if (line[1] - line[0] === 1) {
      field.classList.add("h", `h${line[0]}`, "full");
    } else {
      field.classList.add("d", `d${line[0]}`, "full");
    }

    field.classList.add("winner");
  });
};
