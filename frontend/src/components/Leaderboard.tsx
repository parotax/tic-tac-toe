import { useContext, useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import LoginPage from "./LoginPage";
import axios from "axios";

const Leaderboard = () => {
  const { auth } = useContext(AuthContext);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    axios
      .get("https://tictactoebackend.fly.dev/api/leaderboard")
      .then((res) => setLeaderboard(res.data));
  }, []);

  const colors = ["#d5d5d5", "#EAEAEA"];

  if (auth === undefined) return <LoginPage />;
  return (
    <div className="leaderboard-container">
      <div>
        <div
          className="leaderboard-cell"
          style={{
            backgroundColor: colors[1],
          }}
        >
          <p style={{ width: "50%" }}>Name:</p>
          <p style={{ width: "50%" }}>Wins:</p>
        </div>
        {leaderboard.map((user: any, i) => (
          <div
            className="leaderboard-cell"
            key={i}
            style={{
              backgroundColor: colors[i % colors.length],
            }}
          >
            <p style={{ width: "50%" }}>{user.name}</p>
            <p style={{ width: "50%" }}>{user.wins}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
