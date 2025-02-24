<?php
include 'config.php';

$sql = "SELECT * FROM users"; // Replace with actual table name
$result = runQuery($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo json_encode($row);
    }
} else {
    echo "No data found.";
}
?>
