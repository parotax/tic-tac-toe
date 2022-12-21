import { GoogleOAuthProvider } from "@react-oauth/google";
import { HashRouter, Routes, Route } from "react-router-dom";
import PageWrapper from "./components/PageWrapper";
import NoPage from "./components/NoPage";
import Game from "./components/Game";
import "./styles.css";
import Leaderboard from "./components/Leaderboard";

const oAuthConf = {
  clientId:
    "660891035177-44s0pfkma8i682gre4ai0j62u2vgsjng.apps.googleusercontent.com",
};

const App = () => {
  return (
    <GoogleOAuthProvider {...oAuthConf}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<PageWrapper />}>
            <Route index element={<Game />} />
            <Route path="leaderboard" element={<Leaderboard />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
