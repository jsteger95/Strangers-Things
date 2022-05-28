import React, { useState } from "react";
import { createNewPost } from "../api";
import { getToken, getUser } from "../authorization";

const CreatePost = ({setPosts, posts, token}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div className="Create-Post-Form">
      <h1>Create New Post</h1>
      <form
        id="newPostSubmission"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const user = getUser();
            const newPost = await createNewPost(
              title,
              description,
              user,
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjkyOTk5YTNlZTdiODAwMTdlYmEwNjUiLCJ1c2VybmFtZSI6Im1hcmlvbSIsImlhdCI6MTY1Mzc3NDkyM30.LKe_8v7c0NjJHd__KdoN2U1Eg-pJGMs6trWjLBRJGFA"
            );
            setPosts([newPost, ...posts])
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <fieldset className="create-new-post-field">
          <label htmlFor="Title">Title</label>
          <input
            id="Title"
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
              console.log(title);
            }}
          ></input>
        </fieldset>
        <fieldset className="create-new-post-field">
          <label htmlFor="description">Description</label>
          <input
            id="Description"
            type="text"
            placeholder="Enter Title"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
              console.log(description);
            }}
          ></input>
        </fieldset>
        <fieldset className="create-new-post-field">
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="text"
            placeholder="Enter Price"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
              console.log(price);
            }}
          ></input>
        </fieldset>
          <button className="newPostSubmitButton" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
