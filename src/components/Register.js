import React, { useState } from "react";
import { registerUser } from "../api";
import { storeToken, storeUser } from "../authorization";

function Register({
  setIsLoggedIn,
  setUserName,
  setPassword,
  userName,
  password,
}) {
  return (
    <div className="register-containter">
      <form
        id="register"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const {
              data: { token },
            } = await registerUser(userName, password);
            storeToken(token);
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
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
