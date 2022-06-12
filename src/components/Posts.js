import React from "react";
import { TOKEN_KEY } from "../const/Index";

function Posts(props) {
  const { post } = props;
  console.log(localStorage.getItem(TOKEN_KEY));
  return (
    <div>
      {post.map((post) => {
        return (
          <div>
            {post?.author?.username}
            {post?.description}
            {post?.location}
            {post?.price}
            {post?.title}
            {JSON.stringify(post?.messages)}
            <br></br>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
