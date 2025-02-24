<?php
include 'config.php';

function runQuery($query) {
    global $conn;
    $result = $conn->query($query);
    return $result;
}
?>
