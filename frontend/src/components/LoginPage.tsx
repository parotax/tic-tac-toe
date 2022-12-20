import { useContext } from "react";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import axios from "axios";
import jwtDecode, { JwtPayload } from "jwt-decode";
import AuthContext from "./AuthContext";
import "../styles.css";

const LoginPage = () => {
  const { setAuth } = useContext(AuthContext);

  const onSuccess = (response: CredentialResponse) => {
    if (response.credential !== undefined) {
      setAuth(response.credential);
      type customJwtPayload = JwtPayload & { name: string; email: string };
      const decoded = jwtDecode<customJwtPayload>(response.credential);
      axios
        .get(`https://tictactoebackend.fly.dev/api/users/${decoded.email}`)
        .then((res) => {
          if (res.data.length === 0) {
            axios.post("https://tictactoebackend.fly.dev/api/users", {
              name: decoded.name,
              email: decoded.email,
            });
          }
        });
    }
  };

  const onError = () => {
    console.error("Login failed!");
  };

  return (
    <div className="login-container">
      <p>Login to view leaderboard</p>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </div>
  );
};

export default LoginPage;
