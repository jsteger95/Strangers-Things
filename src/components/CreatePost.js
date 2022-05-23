import React, { useState } from "react";
import { createNewPost } from "../api";
import { getToken } from "../authorization";

const CreatePost = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState('');
  return (
    <div className="Create-Post-Form">
      <h1>Create New Post</h1>
      <form
        id='newPostSubmission'
        onSubmit={async (event) => {
            event.preventDefault()
            try {
                const token = getToken()
                const user = ''
                const newPost = await createNewPost(title, description, user, token)
            } catch (error) {
                console.log(error)
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
      </form>
    </div>
  );
};

export default CreatePost;
