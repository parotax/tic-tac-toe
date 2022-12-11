import { ReactNode, useState } from "react";
import { GoogleLogin, CredentialResponse } from "@react-oauth/google";

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
    return <GoogleLogin onSuccess={onSuccess} onError={onError} />;
  } else {
    return <>{props.children}</>;
  }
};

export default AuthWrapper;
