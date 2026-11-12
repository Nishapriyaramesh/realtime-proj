
"use client";

import { useState } from "react";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function handleLogin(event) {
        event.preventDefault();

        if (
            email === "admin@gmail.com" &&
            password === "12345"
        ) {
            setMessage("Login Successful!");
        } else {
            setMessage("Invalid Email or Password!");
        }
    }

    return (
        <div className="auth-container">

            <form className="login-form" onSubmit={handleLogin}>

                <h2>Employee Login</h2>

                <label>Email Address</label>

                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label>Password</label>

                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>

                <p>{message}</p>
                <p>Don't have an account?<a href="/signup"> Sign Up</a></p>

            </form>

        </div>
    );
}
