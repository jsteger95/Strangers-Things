import React from "react";
import { useHistory } from "react-router-dom";
import { TOKEN_KEY, USER_KEY } from "../const/Index";

export default function LogoutCmp(props) {
  const { setIsLoggedIn, setUserName, setPassword } = props;
  const history = useHistory();
  function handleClick(e) {
    //remove token from localstorage
    localStorage.removeItem(TOKEN_KEY);
    //remove user from localstorage
    localStorage.removeItem(USER_KEY);
    //remove username and password from internal state
    setIsLoggedIn(false);
    //change isloggedin to false
    setUserName("");
    setPassword("");
    history.push("/login");
  }
  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}
