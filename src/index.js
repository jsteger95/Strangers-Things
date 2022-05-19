import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navigation/Navbar";
import { fetchPosts } from "./api";
import { URL } from "./const/Index";
import Posts from "./components/Posts";

const Mario = () => {
  const [posts, setPosts] = useState([]);

  const fetchAllPosts = async () => {};

  useEffect(() => {
    fetchPosts(URL).then((posts) => {
      setPosts(posts);
    });
  }, []);
  return (
    <div>
      <Navbar />
      {posts.map((post) => {
        console.log(post);
        return <div>{post.author.username} !! 
        {post.description} !! 
        {post.location} !! 
        {post.price}
        {post.title}
        {JSON.stringify(post.messages)}
        <br></br><hr /></div>
      })}
      <Posts />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
const element = <h1>Strangers Things</h1>;
root.render(<Mario />);
