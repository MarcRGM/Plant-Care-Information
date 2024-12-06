<?php
session_start();  // Start session to store user data temporarily.
require_once 'db.php';  // Ensure the file is included only once and throws an error if it’s not found.

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER["REQUEST_METHOD"] == "POST") {  // POST REQUEST
    // Get email and password from POST data
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

        // Return success message
        echo json_encode(['message' => 'Login successful!']);
    } else {
        // Return error message if login fails
        echo json_encode(['message' => 'Invalid email or password!']);
    }
}
