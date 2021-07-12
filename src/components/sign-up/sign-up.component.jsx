import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { auth, createUserProfileDocument } from "../../firebase/firebsae-utils";

import "./sign-up.styles.css";

const SignUp = () => {
  const [userDetails, setUserDetails] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userDetails;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords Do Not match!");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      setUserDetails({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(`Error while Signup: ${error}`);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <div className="signup__main">
      <h2 className="title">I do not have an account</h2>
      <span>Signup with your email and password</span>
      <form className="signup__body__form" onSubmit={handleSubmit}>
        <TextField
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          variant="outlined"
          required
          className="signup__body"
        />
        {/* email */}
        <TextField
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          variant="outlined"
          required
          className="signup__body"
        />
        {/* password */}
        <TextField
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          variant="outlined"
          required
          className="signup__body"
        />
        {/* Confirm Password */}
        <TextField
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          variant="outlined"
          required
          className="signup__body"
        />
        <div className="signup-btn">
          <Button type="submit" variant="contained" color="primary">
            SIGN UP
          </Button>
        </div>
      </form>
      <div className="signin-signup__link">
        <Link to="/sign-in-and-sign-up">Sign In instead</Link>
      </div>
    </div>
  );
};

export default SignUp;
