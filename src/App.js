import { useState, useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

// import components
import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/homepage/homepage.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebsae-utils";

const App = () => {
  const [currentUser, setCurrentUser] = useState();
  console.log(process.env);
  useEffect(() => {
    let unsubscribeFromAuth = null;
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      console.log("userAuth: ", userAuth);
      setCurrentUser(userAuth);
    });

    // unsubscribe
    return () => {
      unsubscribeFromAuth();
    };
  }, []);
  return (
    <>
      <Navbar currentUser={currentUser} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <HomePage currentUser={currentUser} />}
        />

        <Route path="/sign-in-and-sign-up" component={SignInAndSignUp} />
      </Switch>
    </>
  );
};

export default App;
