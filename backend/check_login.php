<?php
session_start();  // Start session

if (isset($_SESSION['user_id']) && isset($_SESSION['email'])) {
    // If the session exists, return the user information as JSON
    echo json_encode(['loggedIn' => true, 'email' => $_SESSION['email']]);
} else {
    // If not logged in, return a loggedOut status
    echo json_encode(['loggedIn' => false]);
}
