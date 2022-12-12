import { createContext } from "react";

interface AuthContextProps {
  auth?: string;
  setAuth: (auth: string) => void;
}

const AuthContext = createContext<AuthContextProps>({
  auth: undefined,
  setAuth: () => {},
});

export default AuthContext;
