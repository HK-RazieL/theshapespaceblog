import React, { Component } from 'react';
import Notifications from "./Notifications";
import AllPosts from "../Posts/AllPosts";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Dashboard extends Component {
  render() {
    const { posts, auth, notifications } = this.props;
    if (!auth.uid) {
      return <Redirect to="/signin" />;
    }
    return (
      <div className="dashboard">
        <div>
          <AllPosts posts={posts} />
        </div>
        <div>
          <Notifications notifications={notifications} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
  }
}

export default compose(
  connect(mapStateToProps), 
  firestoreConnect([
    { collection: 'posts', orderBy: ["createdAt", "desc"] },
    { collection: 'notifications', limit: 5, orderBy: ["time", "desc"] }
  ])
)(Dashboard);