<?php
session_start();
require_once 'db.php';

// Check if user is logged in 
if (!isset($_SESSION['user_id'])) {
    // echo "Need to be logged in to add to favorites.";
    exit;  // Exit if the user is not logged in
}

// Check if api_plant_id is set
if (isset($_POST['api_plant_id'])) {
    $user_id = $_SESSION['user_id'];  // Get the logged-in user's ID
    $api_plant_id = $_POST['api_plant_id'];  // Get the plant's ID to be added

    // Insert the plant into the favorites table for this user
    $stmt = $pdo->prepare("INSERT INTO favorites (user_id, api_plant_id) VALUES (?, ?)");
    if ($stmt->execute([$user_id, $api_plant_id])) {
        // echo "Plant added to favorites!";
    } else {
        // echo "Failed to add plant to favorites.";
    }
}
