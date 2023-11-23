import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";
import Navbar from "./Navbar";
const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "First Name:",
      firstName,
      "Last Name:",
      lastName,
      "Email:",
      email,
      "Password:",
      password
    );
    // Add your registration logic here, e.g., make an API call
  };

  return (
    <>
      <Navbar />
      <div className="registration-container">
        <div className="registration-content">
          <h1 className="website-name">Art Gallery Website</h1>
          <p className="quotation">
            "Every artist dips his brush in his own soul and paints his own
            nature into his pictures." - Henry Ward Beecher
          </p>
        </div>
        <form className="registration-form" onSubmit={handleSubmit}>
          <h2>Registration</h2>
          <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <Link to="/Register">Register</Link>
          </button>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Registration;
