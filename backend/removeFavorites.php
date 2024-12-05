<?php
session_start();
require_once 'db.php';

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    exit;
}

// Check if 'api_plant_id' is set
if (isset($_POST['api_plant_id'])) {
    $user_id = $_SESSION['user_id'];  // Get logged-in user's ID 
    $api_plant_id = $_POST['api_plant_id'];  // Get the plant's ID to remove

    // Delete the plant from the favorites
    $stmt = $pdo->prepare("DELETE FROM favorites WHERE user_id = ? AND api_plant_id = ?");
    if ($stmt->execute([$user_id, $api_plant_id])) {
        // success
    } else {
        // fail
    }
}
