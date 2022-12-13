import { useContext } from "react";
import AuthContext from "./AuthContext";
import LoginPage from "./LoginPage";

const Leaderboard = () => {
  const { auth } = useContext(AuthContext);

  const data = [
    ["bao", 10],
    ["bao", 10],
    ["bao", 10],
    ["bao", 10],
    ["bao", 10],
    ["bao", 10],
    ["bao", 10],
    ["bao", 10],
    ["bao", 10],
    ["bao", 10],
  ];
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
      {data.map((a, i) => (
        <div
          className="cell"
          style={{
            backgroundColor: colors[i % colors.length],
          }}
        >
          <p style={{ width: "30vw" }}>{a[0]}</p>
          <p style={{ width: "30vw" }}>{a[1]}</p>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
