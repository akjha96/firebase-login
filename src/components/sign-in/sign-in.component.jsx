import "./sign-in.styles.css";
import Button from "@material-ui/core/Button";
import { signInWithGoogle } from "../../firebase/firebsae-utils";

const SignIn = () => {
  return (
    <div className="signin__main">
      <div className="login-btn">
        <Button
          type="button"
          variant="contained"
          onClick={signInWithGoogle}
          color="primary"
          className="signin__buttons"
        >
          Sign In with Google
        </Button>
      </div>
      <div className="login-btn">
        <Button
          type="button"
          variant="contained"
          onClick={signInWithGoogle}
          color="primary"
          className="signin__buttons"
        >
          Sign In with FaceBook
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
