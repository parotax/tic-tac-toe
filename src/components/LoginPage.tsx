import { useContext } from "react";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import AuthContext from "./AuthContext";
import "../styles.css";

const LoginPage = () => {
  const { setAuth } = useContext(AuthContext);

  const onSuccess = (response: CredentialResponse) => {
    if (response.credential !== undefined) setAuth(response.credential);
  };

  const onError = () => {
    console.error("Login failed!");
  };

  return (
    <div className="login-container">
      <p>Login via google below</p>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </div>
  );
};

export default LoginPage;
