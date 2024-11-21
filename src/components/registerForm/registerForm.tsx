import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 

    // Called when the form is submitted
    const handleSubmit = async (e: React.FormEvent) => { // Only execute when its called
        e.preventDefault(); // prevent reloading the page

        try {
            // POST request to register the user
            await axios.post("/php/auth/register.php", { username, password }); // Finish execute before continuing
            // alert("Registration successful!");
        } catch (error) {
            // alert("Registration failed!"); 
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} // updates the variable whenever the user types in the field
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} // updates the variable whenever the user types in the field
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
