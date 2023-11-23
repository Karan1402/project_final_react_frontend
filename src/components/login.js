import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Navbar from "./Navbar";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username, "Password:", password);
  };

  return (
    <>
      <Navbar />
      <div className="login-container">
        <div className="login-content">
          <h1 className="website-name">Art Gallery Website</h1>
          <p className="quotation">"Where Every Brushstroke Tells a Story"</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">
            <Link to="/login">Login</Link>
          </button>
          <p>
            Already have an account? <Link to="/registration">Sign Up</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
