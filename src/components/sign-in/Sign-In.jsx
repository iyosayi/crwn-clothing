import React, { Component } from "react";
import FormInput from "../../components/form-input/FormInput";
import "./sign-in.scss";
import Button from "../button/Button";
import { signInWithGoogle } from "../../firebase/firebase.utils";

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      email: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>Hello</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="email"
            label="Email"
            value={this.state.email}
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            label="Password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <Button type="submit"> Sign In </Button>
            <Button isGoogleSignIn onClick={signInWithGoogle}>
              {" "}
              Sign In with google{" "}
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
