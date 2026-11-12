
"use client";

import { useState } from "react";
import Link from "next/link"; 

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  function handleSignup(e) {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setMessage("Please fill all fields!");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must contain at least 6 characters!");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match!");
      return;
    }

    setMessage("Account created successfully!");
  }

  return (
  <div className="auth-container">
    <form className="signup-form" onSubmit={handleSignup}>
      <h2>Create Account</h2>

      <label>Full Name</label>
      <input type="text" placeholder="Enter your name" required />

      <label>Email Address</label>
      <input type="email" placeholder="Enter your email" required />

      <label>Password</label>
      <input type="password" placeholder="Enter password" required />

      <label>Confirm Password</label>
      <input type="password" placeholder="Confirm password" required />

      <button type="submit">Create Account</button>

      <p>
        Already have an account?{" "}
        <Link href="/login">Login</Link>
      </p>
    </form>
  </div>
);
}
