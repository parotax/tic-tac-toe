import { GoogleLogin, CredentialResponse } from "@react-oauth/google";
import "../styles.css";

interface Props {
  onSuccess: (response: CredentialResponse) => void;
  onError: () => void;
}

const LoginPage = (props: Props) => {
  return (
    <div className="login-container">
      <p>Login via google below</p>
      <GoogleLogin onSuccess={props.onSuccess} onError={props.onError} />
    </div>
  );
};

export default LoginPage;
