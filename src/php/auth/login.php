<?php
    include 'db.php';

    $username = $_POST['username'];
    $stmt = $pdo->prepare("SELECT * FROM users where username = ?")
    
?>