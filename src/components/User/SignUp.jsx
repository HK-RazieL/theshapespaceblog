import React, { Component } from 'react'
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";

class SignUp extends Component {
  state = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    password2: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="sign-up-form">
          <h5>Sign Up</h5>
          <div>
            <label htmlFor="email">Email</label>
            <input onChange={this.handleChange} type="email" id="email"/>
          </div>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input onChange={this.handleChange} type="text" id="firstName"/>
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input autoComplete="foo" onChange={this.handleChange} type="text" id="lastName"/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input autoComplete="foo" onChange={this.handleChange} type="password" id="password"/>
          </div>
          <div>
            <label htmlFor="password2">Repeat Password</label>
            <input autoComplete="foo" onChange={this.handleChange} type="password" id="password2"/>
          </div>
          <div>
            <input type="submit" value="Sign Up"/>
          </div>
          <div>{ authError ? <p>{ authError }</p> : null}</div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => {
      dispatch(signUp(newUser));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);