import React from 'react'

function Posts(props) {
  const {post} = props
  return (
    <div>
      {post.map((post) => {
      return (
        <div>
          {post.author.username} !!
          {post.description} !!
          {post.location} !!
          {post.price}
          {post.title}
          {JSON.stringify(post.messages)}
          <br></br>
          <hr />
        </div>
      );
    })}</div>
  )
}

export default Posts
