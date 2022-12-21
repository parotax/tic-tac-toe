import { useContext } from "react";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import AxiosInstance from "./AxiosInstance";
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
      AxiosInstance.get(`/users/${decoded.email}`).then((res) => {
        if (res.data.length === 0) {
          AxiosInstance.post("/users", {
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
