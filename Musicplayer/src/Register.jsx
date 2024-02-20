import React from "react";
import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const navigate = useNavigate();
  function Reguser(event) {
    event.preventDefault();
    const user = {
      name: name,
      email: email,
      // username:username,
      password: password,
      confirmpassword: confirmpassword,
    };
    if (
      name.length > 3 &&
      password.length > 4 &&
      confirmpassword.length > 4 &&
      password == confirmpassword
    ) {
      window.localStorage.setItem("user", JSON.stringify(user));
      console.log(localStorage.user);
      alert("Registered successfully")
      navigate("/");
    } else {
      alert("password do not match");
    }
  }

  return (
    <div className="regcontainer">
      <h1 className="head">SIGNUP</h1>

      <div>
        <form className="reglabel">
          <input
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Enter name"
            required
          ></input>

          <input
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Enter Email"
            required
          ></input>

          <input
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Enter Password"
            required
          ></input>

          <input
            onChange={(event) => setConfirmpassword(event.target.value)}
            type="password"
            placeholder="Confirm Password"
            required
          ></input>

          <button type="submit" className="registerbtn" onClick={Reguser}>
            Register
          </button>
          <Link to="/">Login here</Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
