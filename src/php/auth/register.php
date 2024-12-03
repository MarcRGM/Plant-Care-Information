<?php
require_once 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") { // POST requests
    $full_name = $_POST['full_name'];  // Retrieves the `full name` 
    $email = $_POST['email'];  // Retrieves the `email` 
    $password = $_POST['password'];  // Retrieves the `password` 

    // Check if email already exists
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    if ($stmt->rowCount() > 0) {  // If the username already exists:
        // echo "Username already exists!";
        exit;
    }

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT); // Encrypting

    // Insert new user into the database
    $stmt = $pdo->prepare("INSERT INTO users (full_name, email, password) VALUES (?, ?)");
    if ($stmt->execute([$full_name, $username, $hashedPassword])) {
        // echo "Registration successful!";
    } else {
        // echo "Registration failed!";
    }
}
