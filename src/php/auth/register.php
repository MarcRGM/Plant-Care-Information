<?php
require_once 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") { // POST requests
    $username = $_POST['username'];  // Retrieves the `username` 
    $password = $_POST['password'];  // Retrieves the `password` 

    // Check if username already exists
    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
    $stmt->execute([$username]);
    if ($stmt->rowCount() > 0) {  // If the username already exists:
        // echo "Username already exists!";
        exit;
    }

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT); // Encrypting

    // Insert new user into the database
    $stmt = $pdo->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
    if ($stmt->execute([$username, $hashedPassword])) {
        // echo "Registration successful!";
    } else {
        // echo "Registration failed!";
    }
}
