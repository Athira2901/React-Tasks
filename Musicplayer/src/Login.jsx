import React, { useEffect } from "react";
import "./Register.css";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function Loguser(event) {
    event.preventDefault();
    const user = {
      username: username,
      password: password,
    };
    let getuser = window.localStorage.getItem("user");
    let parseuser = JSON.parse(getuser);
     
    if (
      user.username == parseuser.name &&
      user.password == parseuser.password
    ) {
      alert("loggedin sucessfully");
      navigate("/songs");
    } else {
      alert("invalid username or password");
    }
  }
  function handleCallbackResponse(response) {
    navigate("/songs")
    console.log("Encoded jwt ID token:" + response.credential);
    var userObject=jwtDecode(response.credential);
    console.log(userObject)
    window.localStorage.setItem("userObject", JSON.stringify(userObject));

  }
  useEffect(() => {
    google.accounts.id.initialize({
      client_id:
        "930483529103-1fi8dglr75lf5u64g27fni0veqsn76p3.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("demo"), {
      theme: "outline",
      size: "large",
    });
  }, []);

  return (
    <div className="regcontainer">
      <h1 className="head">LOGIN</h1>
      <form className="reglabel">
        <input
          type="text"
          placeholder="Enter Username"
          onChange={(event) => setUsername(event.target.value)}
        ></input>

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>

        <button type="submit" className="registerbtn" onClick={Loguser}>
          Login
        </button>

        <Link to="/Register">create an account </Link>
      <div id="demo"></div>
      </form>
    </div>
  );
}

export default Login;
