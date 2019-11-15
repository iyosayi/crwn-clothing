import React from "react";
import SignIn from "../../components/sign-in/Sign-In";
import SignUp from "../../components/sign-up/SignUp";
import "./sigin-and-signup.scss";

function SignInAndSignUp() {
  return (
    <div className="signin-and-signup">
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SignInAndSignUp;
