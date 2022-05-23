import React from "react";
import ReactDOM from "react";
import { Link } from "react-router-dom";


function Navbar(props) {
  return (
    <div className='nav-bar'>
      <Link className="nav-link" to="/Posts">Posts
      </Link>
      <div className="user-links">
      <Link className="nav-link" to="/Login">Login
      </Link>
      <Link className="nav-link" to="/Register">Register
      </Link>
      </div>
    </div>
  );
};

export default Navbar;
