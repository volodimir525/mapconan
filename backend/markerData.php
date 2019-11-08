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
		printf (json_encode(array()));
		exit;
		// die("Connection failed: " . $conn->connect_error);
	}
	
    $sql = "SELECT * FROM markerData";
    $result = $conn->query($sql);

	if (!$result) {
		printf (json_encode(array()));
		exit;
		// die("No result found");
	}

	$rows = array();
	while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
		$rows[] = $row;
	}
	printf (json_encode($rows));
?>