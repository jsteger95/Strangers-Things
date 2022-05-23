import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navigation/Navbar";
import { fetchPosts } from "./api";
import { URL } from "./const/Index";
import Posts from "./components/Posts";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import CreatePost from "./components/CreatePost";
import "./styling/style.css";
import LogoutCmp from "./components/LogoutCmp";
import { Redirect } from "react-router-dom";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetchPosts(URL).then((posts) => {
      setPosts(posts);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <LogoutCmp
        setIsLoggedIn={setIsLoggedIn}
        setUserName={setUserName}
        setPassword={setPassword}
      />
      <Switch>
        <Route path="/Posts">
          <Posts post={posts} />
          <CreatePost />
        </Route>
        <Route path="/Login">
          {/* {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />} */}
          {isLoggedIn ? (
            <Redirect to="/posts" />
          ) : (
            <Login
              setIsLoggedIn={setIsLoggedIn}
              setUserName={setUserName}
              setPassword={setPassword}
              userName={userName}
              password={password}
            />
          )}
        </Route>
        <Route path="/Register">
          <Register
            setIsLoggedIn={setIsLoggedIn}
            setUserName={setUserName}
            setPassword={setPassword}
            userName={userName}
            password={password}
          />
        </Route>
      </Switch>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
);
