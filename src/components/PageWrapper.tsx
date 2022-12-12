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
      <header>
        <div className="header-child">
          {auth === undefined ? (
            <GoogleLogin onSuccess={onSuccess} onError={onError} />
          ) : (
            <h6>Logged in</h6>
          )}
        </div>
        <h6 className="header-child">Tic Tac Toe</h6>
        <h6 className="header-child">
          <div>Leaderboard</div>
        </h6>
      </header>
      <div>{props.children}</div>
    </AuthContext.Provider>
  );
};

export default PageWrapper;
