import { AuthProvider, AuthProviderProps } from "oidc-react";
import Game from "./components/Game";
import "./styles.css";

const oidcConf: AuthProviderProps = {
  onSignIn: () => {},
  scope: "openid",
  responseType: "code",
  authority: "https://accounts.google.com",
  clientId:
    "660891035177-44s0pfkma8i682gre4ai0j62u2vgsjng.apps.googleusercontent.com",
  redirectUri: window.location.href,
};

const App = () => {
  return (
    <AuthProvider {...oidcConf}>
      <div className="content">
        <Game />
      </div>
    </AuthProvider>
  );
};

export default App;
