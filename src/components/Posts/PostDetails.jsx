import React from 'react';
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { deletePost } from "../../store/actions/postActions";


const PostDetails = (props) => {
  const { post, auth } = props;
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
  
  function handleDelete() {
    props.deletePost(props.match.params.id);
    props.history.push("/");
  
  }

  if (post) {
    return (
      <div className="post-details">
        <div className="post-content">
          <span className="post-title">{post.title}</span>
          <p>{post.content}</p>
        </div>
        <div>
          <div className="post-author">by: {post.authorFirstName} {post.authorLastName}</div>
          <div className="post-date">{moment(post.createdAt.toDate()).fromNow()}</div>
        </div>
        { post.authorId === auth.uid ? (<input type="button" onClick={ () => { handleDelete() } } value="Delete" />) : null }
      </div>
    )
  } else {
    return (
      <div>Loading...</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const posts = state.firestore.data.posts;
  const post = posts ? posts[id] : null;
  return {
    post: post,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (post) => {
      dispatch(deletePost(post));
    }
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "posts" }
  ])
)(PostDetails);