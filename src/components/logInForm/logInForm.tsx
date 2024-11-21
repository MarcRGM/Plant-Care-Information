import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 

    // This function is called when the form is submitted
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevents the default form submission

        try {
            // POST request to login the user
            await axios.post("/php/auth/login.php", { username, password });
            // alert("Login successful!"); 
        } catch (error) {
            // alert("Login failed!"); 
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;
