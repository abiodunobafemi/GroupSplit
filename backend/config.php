<?php
$host = "imc.kean.edu";
$username = "aobafemi";
$password = "1141726";
$dbname = "2024F_aobafemi";

$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
