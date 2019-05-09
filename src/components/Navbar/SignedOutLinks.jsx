import React from "react";
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
  return (
    <ul>
      <li><NavLink to="/signin">SignIn</NavLink></li>
      <li><NavLink to="/signup">Sign Up</NavLink></li>
    </ul>
  )
}

export default SignedOutLinks;