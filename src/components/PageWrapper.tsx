import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { Outlet, Link } from "react-router-dom";
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
        <div className="header-child">
          <Link to="leaderboard">
            <h6>Leaderboard</h6>
          </Link>
        </div>
      </header>
      <div>{props.children}</div>
      <Outlet />
    </AuthContext.Provider>
  );
};

export default PageWrapper;
