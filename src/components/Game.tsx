import ComputerLogic from "./ComputerLogic";
import CheckWin from "./CheckWin";
import { useState } from "react";
import "../styles.css";
import Square from "./Square";

const useForceUpdate = () => {
  const [value, setValue] = useState(0); // eslint-disable-line @typescript-eslint/no-unused-vars
  return () => setValue((value) => value + 1);
};

const Game = () => {
  const forceUpdate = useForceUpdate();
  const [gameOn, setGameOn] = useState(false);
  const [lastWinner, setLastWinner] = useState("None");
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const checkWin = () => {
    let winner = CheckWin({ board });
    forceUpdate();
    if (winner === false) return false;
    setLastWinner(winner);
    setGameOn(false);
    return true;
  };

  const handleTurn = (tile: number) => {
    const x = Math.floor(tile / 3);
    const y = tile % 3;
    if (!gameOn) return;
    if (board[x][y] === 0) {
      const newBoard = board;
      newBoard[x][y] = 1;
      setBoard(newBoard);
      if (checkWin()) return;
      setBoard(ComputerLogic({ board }));
      checkWin();
    } else alert("That tile is already taken!");
  };

  const startGame = () => {
    setGameOn(true);
    setBoard([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  };

  return (
    <>
      <p>
        {gameOn ? (
          "Game on!"
        ) : (
          <button onClick={() => startGame()}>
            <p>
              {lastWinner === "None"
                ? "Click to play"
                : lastWinner === "Tie"
                ? "Tie! Click to play again!"
                : `${lastWinner} won! Click to play again`}
            </p>
          </button>
        )}
      </p>
      <div className="board">
        <Square board={board} handleTurn={handleTurn} tile={0} />
        <Square board={board} handleTurn={handleTurn} tile={1} />
        <Square board={board} handleTurn={handleTurn} tile={2} />
        <Square board={board} handleTurn={handleTurn} tile={3} />
        <Square board={board} handleTurn={handleTurn} tile={4} />
        <Square board={board} handleTurn={handleTurn} tile={5} />
        <Square board={board} handleTurn={handleTurn} tile={6} />
        <Square board={board} handleTurn={handleTurn} tile={7} />
        <Square board={board} handleTurn={handleTurn} tile={8} />
      </div>
    </>
  );
};

export default Game;
