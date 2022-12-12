import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { useState } from "react";
import AuthContext from "./AuthContext";
import "../styles.css";

const PageWrapper = (props: any) => {
  const [auth, setAuth] = useState<string>();

  const onSuccess = (response: CredentialResponse) => {
    if (response.credential !== undefined) setAuth(response.credential);
  };

  const onError = () => {
    console.error("Login failed!");
  };

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <div className="header">
        <header>Tic Tac Toe</header>
        {auth === undefined ? (
          <GoogleLogin onSuccess={onSuccess} onError={onError} />
        ) : (
          <h6>Logged in</h6>
        )}
        <h6>Leaderboard</h6>
      </div>
      <div>{props.children}</div>
    </AuthContext.Provider>
  );
};

export default PageWrapper;
