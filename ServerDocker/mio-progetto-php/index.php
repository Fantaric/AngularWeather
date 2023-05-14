<?php
/*$mysqli = new mysqli("Cache_Weather", "root", "segretissima", "mysql");

// Check connection
if ($mysqli -> connect_errno) {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();
  }
  
  // Perform query
  if ($result = $mysqli -> query("SELECT * FROM prova")) {
    echo "Returned rows are: " . $result -> num_rows;
    // Free result set
    $result -> free_result();
  }
  echo "salve";
  $mysqli -> close();

  $mysqli = new mysqli($host, $user, $pass, $db)
      or die("<br>Connessione non riuscita " . $mysqli->connect_error . " " . $mysqli->connect_errno);
*/

  $host = "127.0.0.1";
  $user = "root";
  $pass = "segretissima";
  $db = "Cache_Weather";


      echo "cianeeee";

      $conn = mysqli_connect($host, $user, $pass);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>