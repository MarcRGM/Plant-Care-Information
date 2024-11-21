<?php
    session_start();  // Start session to store user data temporarily.
    require_once 'db.php';  // Ensures the file is included only once and throws a fatal error if it’s not found.

    if ($_SERVER["REQUEST_METHOD"] == "POST") {  // POST requests
        $username = $_POST['username'];  // Retrieves the `username`
        $password = $_POST['password'];  // Retrieves the `password`

        // Check if user exists in the database
        $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?"); 
        $stmt->execute([$username]); 
        $user = $stmt->fetch(); 

        // Verify the password
        if ($user && password_verify($password, $user['password'])) {  // Comparing provided password with hashed password.
            $_SESSION['user_id'] = $user['id'];  // Stores user's ID in the session.
            $_SESSION['username'] = $user['username'];  // Stores username in the session.
            // echo "Login successful!";
        } else {
            // echo "Invalid username or password!";
        }
    }
?>

