import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import jwtDecode, { JwtPayload } from "jwt-decode";
import AuthContext from "./AuthContext";
import "../styles.css";

const PageWrapper = (props: any) => {
  const location = useLocation();
  const [auth, setAuth] = useState<string>();

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
    <AuthContext.Provider value={{ auth, setAuth }}>
      <header>
        <div className="header-child">
          {auth === undefined ? (
            <GoogleLogin onSuccess={onSuccess} onError={onError} />
          ) : (
            <h6>Logged in</h6>
          )}
        </div>
        <h4 className="header-child">Tic Tac Toe</h4>
        <div className="header-child">
          {location.pathname === "/" ? (
            <Link
              to="leaderboard"
              style={{ textDecoration: "none", color: "#00ABB3" }}
            >
              <h6>Leaderboard</h6>
            </Link>
          ) : (
            <Link to="/" style={{ textDecoration: "none", color: "#00ABB3" }}>
              <h6>Home</h6>
            </Link>
          )}
        </div>
      </header>
      <div>{props.children}</div>
      <Outlet />
    </AuthContext.Provider>
  );
};

export default PageWrapper;
