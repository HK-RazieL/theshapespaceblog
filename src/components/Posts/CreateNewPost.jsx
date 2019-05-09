import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../../store/actions/postActions";
import { Redirect } from "react-router-dom";

class CreateNewPost extends Component {
  state = {
    title: "",
    content: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.createPost(this.state);
    this.props.history.push("/");
  }

render() {
  const { auth } = this.props;
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
  return (
    <form onSubmit={this.handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" onChange={this.handleChange}/>
      <label htmlFor="content">Content:</label>
      <textarea name="" id="content" cols="30" rows="10" onChange={this.handleChange}></textarea>
      <button type="submit" className="btn btn-primary">Create Post</button>
    </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => {
      dispatch(createPost(post));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPost);