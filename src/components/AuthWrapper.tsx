import { ReactNode, useState } from "react";
import { CredentialResponse } from "@react-oauth/google";
import LoginPage from "./LoginPage";

interface Props {
  children: ReactNode;
}

const AuthWrapper = (props: Props) => {
  const [auth, setAuth] = useState<string>();

  const onSuccess = (response: CredentialResponse) => {
    setAuth(response.credential);
  };

  const onError = () => {
    console.error("Login failed!");
  };

  if (auth === undefined) {
    return <LoginPage onSuccess={onSuccess} onError={onError} />;
  } else {
    return <>{props.children}</>;
  }
};

export default AuthWrapper;
