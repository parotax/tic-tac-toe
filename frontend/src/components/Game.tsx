import { useState, useContext } from "react";
import AxiosInstance from "./AxiosInstance";
import ComputerLogic from "./ComputerLogic";
import CheckWin from "./CheckWin";
import Square from "./Square";
import AuthContext from "./AuthContext";
import jwtDecode, { JwtPayload } from "jwt-decode";
import "../styles.css";

const useForceUpdate = () => {
  const [value, setValue] = useState(0); // eslint-disable-line @typescript-eslint/no-unused-vars
  return () => setValue((value) => value + 1);
};

const Game = () => {
  const forceUpdate = useForceUpdate();
  const { auth } = useContext(AuthContext);
  const [gameOn, setGameOn] = useState(true);
  const [board, setBoard] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);

  const checkWin = () => {
    let winner = CheckWin({ board });
    forceUpdate();
    if (winner === false) return false;
    setGameOn(false);
    updateStats(winner);
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

  const updateStats = (winner: string) => {
    if (auth !== undefined) {
      type customJwtPayload = JwtPayload & { email: string };
      const decoded = jwtDecode<customJwtPayload>(auth);
      const email = decoded.email;
      if (winner === "Computer") {
        AxiosInstance.post(`/users/${email}/losses`);
      } else if (winner === "Player") {
        AxiosInstance.post(`/users/${email}/wins`);
      } else if (winner === "Tie") {
        AxiosInstance.post(`/users/${email}/ties`);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "85vh",
      }}
    >
      <div>
        {gameOn ? (
          <p>Good luck!</p>
        ) : (
          <p onClick={() => startGame()} style={{ cursor: "pointer" }}>
            Click to play again!
          </p>
        )}
      </div>
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
    </div>
  );
};

export default Game;
