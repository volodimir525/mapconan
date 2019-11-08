<?php
	# Database Access
	$servername = 'localhost';
	$username = 'root';
	$password = '';
	$dbname = 'mapconanmain';

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}	
	
    $sql = "SELECT * FROM markerdata";
    $result = $conn->query($sql);
	$rows = array();
	while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
		$rows[] = $row;
	}
	printf (json_encode($rows));
?>