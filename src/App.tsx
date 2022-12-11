import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthWrapper from "./components/AuthWrapper";
import Game from "./components/Game";
import "./styles.css";

const oAuthConf = {
  clientId:
    "660891035177-44s0pfkma8i682gre4ai0j62u2vgsjng.apps.googleusercontent.com",
};

const App = () => {
  return (
    <GoogleOAuthProvider {...oAuthConf}>
      <AuthWrapper>
        <div className="content">
          <Game />
        </div>
      </AuthWrapper>
    </GoogleOAuthProvider>
  );
};

export default App;
