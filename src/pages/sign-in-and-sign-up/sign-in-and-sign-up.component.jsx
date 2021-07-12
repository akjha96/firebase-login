import "./sign-in-and-sign-up.styles.css";
import SignIn from "../../components/sign-in/sign-in.component";
// import { Link } from "react-router-dom";

const SignInAndSignUp = () => {
  return (
    <div className="signin-signup__main">
      <SignIn />
      {/* <Link to="/sign-up">Don't Have an account ? Sign Up!</Link> */}
    </div>
  );
};

export default SignInAndSignUp;
