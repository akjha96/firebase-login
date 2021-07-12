import React from "react";
import "./navbar.styles.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebsae-utils";

const Navbar = ({ currentUser }) => {
  return (
    <div className="navbar__main">
      <Link to="/">
        <div className="navbar__left">Firebase Login</div>
      </Link>
      <div className="navbar__right">
        {currentUser ? (
          <>
            <div className="navbar__item__user">
              Hi {currentUser.displayName}
            </div>

            <Button
              variant="contained"
              color="primary"
              onClick={() => auth.signOut()}
            >
              Log out
            </Button>
          </>
        ) : (
          <Link to="/sign-in-and-sign-up">
            <Button variant="contained" color="primary">
              Log In
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
