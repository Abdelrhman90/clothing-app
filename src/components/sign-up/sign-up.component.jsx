import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";
import "./sign-up.styles.scss";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;
    if (password !== confirmPassword) {
      alert("Passwords must match");
      return;
    }
    signUpStart({ email, password, displayName });
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account</h2>
        <span>Singup with your email and password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            onChange={this.handleChange}
            label="Display Name"
            value={displayName}
            required
          />
          <FormInput
            type="email"
            name="email"
            onChange={this.handleChange}
            label="Email"
            value={email}
            required
          />
          <FormInput
            type="password"
            name="password"
            onChange={this.handleChange}
            label="Password"
            value={password}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            onChange={this.handleChange}
            label="Confirm Password"
            value={confirmPassword}
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCred) => dispatch(signUpStart(userCred)),
});

export default connect(null, mapDispatchToProps)(SignUp);
