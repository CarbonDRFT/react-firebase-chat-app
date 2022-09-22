import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Add from "../../img/addAvatar.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import "./login.css";
import { auth } from "../../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="chatApp__login-container">
      <div className="chatApp__login-container_form">
        <div className="chatApp__login-container_form-logo">Happy Chat</div>
        <h1>login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password " />

          <button type="button">Sign in</button>
          {err && <span>something went wrong</span>}
        </form>
        <p>
          You don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
