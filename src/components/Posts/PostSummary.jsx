import React from 'react'
import moment from "moment";


const PostSummary = ({post}) => {
  return (
    <div className="post-summary">
      <div className="post-content">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-author">by: {post.authorFirstName} {post.authorLastName}</p>
        <p className="post-date">{moment(post.createdAt.toDate()).fromNow()}</p>
      </div>
    </div>
  )
}

export default PostSummary;