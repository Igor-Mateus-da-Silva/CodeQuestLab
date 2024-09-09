<?php
session_start();
require_once __DIR__ . '/../src/User.php';

$user = new User();
$user->logout();
?>