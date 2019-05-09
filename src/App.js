import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Notifications from "./components/Dashboard/Notifications";
import SignIn from "./components/User/SignIn";
import SignUp from "./components/User/SignUp";
import CreateNewPost from './components/Posts/CreateNewPost';
import PostDetails from "./components/Posts/PostDetails";
import "./index.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/" component={Notifications} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/createnewpost" component={CreateNewPost} />
            <Route path="/post/:id" component={PostDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
