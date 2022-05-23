import React, { useState } from "react";
import { loginUser } from "../api";
import { storeToken, storeUser } from "../authorization";

function Login(props) {
  const { setIsLoggedIn, setUserName, setPassword, userName, password } = props;
  return (
    <div className="register-containter">
      <form
        id="Login"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const response = await loginUser(userName, password);
            console.log(response);
            //   {
            //     "success": true,
            //     "error": null,
            //     "data": {
            //         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjhhYjVjYjk1Nzc0ODAwMTdlZjNkZTkiLCJ1c2VybmFtZSI6Imlka21hcmlvIiwiaWF0IjoxNjUzMjU5Nzg1fQ.ZEW3WGnndbsN8hb2yPu6THX_dmbgvCbOrp3DU_U3NLQ",
            //         "message": "Thanks for logging in to our service."
            //     }
            // }
            console.log(response.data.token);
            storeToken(response.data.token);
            storeUser(userName);
            setUserName(userName);
            setPassword(password);
            setIsLoggedIn(true);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <fieldset className="register-user-input">
          <label htmlFor="username">User Name</label>
          <input
            id="username"
            type="text"
            placeholder="Enter Username"
            value={userName}
            onChange={(event) => {
              console.log(event.target.value);
              setUserName(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="register-user-input">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(event) => {
              console.log(event.target.value);
              setPassword(event.target.value);
            }}
          ></input>
        </fieldset>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
