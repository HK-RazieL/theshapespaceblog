import React from "react";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) => {
  return (
    <ul>
      <li><NavLink to="/createnewpost">Create New Post</NavLink></li>
      <li><NavLink to="/profile/:id"></NavLink>{props.profile.initials}</li>
      <li><a href="/" onClick={props.signOut}>Sign Out</a></li>
    </ul>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => {
      dispatch(signOut());
    }
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);