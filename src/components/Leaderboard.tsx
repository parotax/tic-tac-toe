import { useContext } from "react";
import AuthContext from "./AuthContext";
import LoginPage from "./LoginPage";

const Leaderboard = () => {
  const { auth } = useContext(AuthContext);

  if (auth === undefined) return <LoginPage />;
  return <div>Leaderboard</div>;
};

export default Leaderboard;
