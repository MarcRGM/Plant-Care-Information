<?php
$host = 'localhost';  // Server where the database is hosted (localhost for local setup)
$db = 'plant_care_db';  // database name
$user = 'root';  // username ('root' for local environments(XAMPP))
$password = '';  // empty for XAMPP default

try {
    // PDO (PHP Data Objects) interacts with the database
    $pdo = new PDO("mysql:host=$host;dbname=$db", $user, $password);

    // Set PDO error mode to exception to catch errors easily
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // echo "Connected successfully";  // check if the connection is working

} catch (PDOException $e) {
    // If connection fails, show error message
    echo "Connection failed: " . $e->getMessage();
}
