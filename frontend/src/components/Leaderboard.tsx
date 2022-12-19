import { useContext, useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import LoginPage from "./LoginPage";
import axios from "axios";

const Leaderboard = () => {
  const { auth } = useContext(AuthContext);
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/leaderboard")
      .then((res) => setLeaderboard(res.data));
  }, []);

  const colors = ["#d5d5d5", "#a9a9a9"];

  if (auth === undefined) return <LoginPage />;
  return (
    <div>
      <div
        className="cell"
        style={{
          backgroundColor: colors[1],
        }}
      >
        <p style={{ width: "30vw" }}>Name:</p>
        <p style={{ width: "30vw" }}>Wins:</p>
      </div>
      {leaderboard.map((user: any, i) => (
        <div
          className="cell"
          key={i}
          style={{
            backgroundColor: colors[i % colors.length],
          }}
        >
          <p style={{ width: "30vw" }}>{user.name}</p>
          <p style={{ width: "30vw" }}>{user.wins}</p>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
