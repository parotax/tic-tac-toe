import { useState } from "react";
import "../styles.css";

const Game = () => {
  const [turn, setTurn] = useState("Player");
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const playerTurn = (tile: number) => {
    if (turn !== "Player") return;

    const x = Math.floor(tile / 3);
    const y = tile % 3;
    console.log(x, y);
    if (board[x][y] === 0) {
      board[x][y] = 1;
    } else {
      alert("That tile is already taken!");
      return;
    }
    setTurn("Computer");
  };

  const computerTurn = () => {
    let loseRow = null;
    let loseCol = null;

    for (let i = 0; i < 3; i++) {
      let x = 0;
      let y = 0;
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === 1) x++;
        else if (board[i][j] === 2) x--;
        if (board[j][i] === 1) y++;
        else if (board[j][i] === 2) y--;
      }
      if (x >= 2) {
        loseRow = i;
        break;
      }
      if (y >= 2) {
        loseCol = i;
        break;
      }
    }

    setTurn("Player");
    if (loseRow !== null || loseCol !== null) {
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[i][j] === 0 && loseRow === i) {
            board[i][j] = 2;
            return;
          }
          if (board[j][i] === 0 && loseCol === i) {
            board[j][i] = 2;
            return;
          }
        }
      }
    }
  };

  const handleClick = (tile: number) => {
    playerTurn(tile);
    computerTurn();
  };

  return (
    <>
      <h2>{turn === "Player" ? "Player's turn" : "Computer's turn"}</h2>
      <button onClick={() => setTurn("Player")}>start</button>
      <button onClick={() => console.log(board)}>board</button>
      <div className="board">
        <div className="square" onClick={() => handleClick(0)}></div>
        <div className="square" onClick={() => handleClick(1)}></div>
        <div className="square" onClick={() => handleClick(2)}></div>
        <div className="square" onClick={() => handleClick(3)}></div>
        <div className="square" onClick={() => handleClick(4)}></div>
        <div className="square" onClick={() => handleClick(5)}></div>
        <div className="square" onClick={() => handleClick(6)}></div>
        <div className="square" onClick={() => handleClick(7)}></div>
        <div className="square" onClick={() => handleClick(8)}></div>
      </div>
    </>
  );
};

export default Game;
