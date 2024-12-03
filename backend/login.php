<?php
session_start();  // Start session to store user data temporarily.
require_once 'db.php';  // Ensure the file is included only once and throws an error if it’s not found.

if ($_SERVER["REQUEST_METHOD"] == "POST") {  // POST REQUEST
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if the user exists in the database
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    // Verify the password
    if ($user && password_verify($password, $user['password'])) {  // If user exists and password matches
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['email'] = $user['email'];

        echo json_encode(['message' => 'Login successful!']);
    } else {
        echo json_encode(['message' => 'Invalid email or password!']);
    }
}
