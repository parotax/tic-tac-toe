import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthWrapper from "./components/AuthWrapper";
import PageWrapper from "./components/PageWrapper";
import Game from "./components/Game";
import "./styles.css";

const oAuthConf = {
  clientId:
    "660891035177-44s0pfkma8i682gre4ai0j62u2vgsjng.apps.googleusercontent.com",
};

const App = () => {
  return (
    <GoogleOAuthProvider {...oAuthConf}>
      <PageWrapper>
        <AuthWrapper>
          <Game />
        </AuthWrapper>
      </PageWrapper>
    </GoogleOAuthProvider>
  );
};

export default App;
