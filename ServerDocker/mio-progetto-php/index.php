<?php 
header("Access-Control-Allow-Method: *");
header("Access-Control-Allow-Origin: *");
//echo $_GET["city"];
$response = get_web_page("http://api.weatherapi.com/v1/forecast.json?key=849b7f2465c946abb46155513232005&q=" .$_GET['city']. "&aqi=no&days=7");
echo $response;
// $resArr = json_decode($response,true);

/*foreach ($resArr as $data)
{
    print_r($data);
echo "latitude=".$data['latitude'].", longitude=".$data['longitude']."<br>";
}*/
//echo "latitude=".$resArr[0]['latitude'].", longitude=".$resArr[0]['longitude']."<br>";

//$response = get_web_page("https://api.open-meteo.com/v1/forecast?latitude=".$resArr[0]['latitude']."&longitude=".$resArr[0]['longitude']."&hourly=temperature_2m,precipitation_probability,rain&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max&timezone=Europe%2FBerlin","null");
//echo $response;
//$resArr = json_decode($response,true);


function get_web_page($url) {
    $options = array(
        CURLOPT_RETURNTRANSFER => true,   // return web page
        CURLOPT_HEADER         => false,  // don't return headers
        CURLOPT_FOLLOWLOCATION => true,   // follow redirects
        CURLOPT_MAXREDIRS      => 10,     // stop after 10 redirects
        CURLOPT_ENCODING       => "",     // handle compressed
        CURLOPT_USERAGENT      => "test", // name of client
        CURLOPT_AUTOREFERER    => true,   // set referrer on redirect
        CURLOPT_CONNECTTIMEOUT => 120,    // time-out on connect
        CURLOPT_TIMEOUT        => 120,    // time-out on response
        //CURLOPT_HTTPHEADER => ['X-Api-Key:'.$key]
    ); 

    $ch = curl_init($url);
    
    curl_setopt_array($ch, $options);
    $content  = curl_exec($ch);

    curl_close($ch);

    return $content;
}


  $host = "db";
  $user = "root";
  $pass = "segretissima";
  $db = "Cache_Weather";


      //echo "cianeeee";

      $conn = mysqli_connect($host, $user, $pass, $db);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
//echo "Connected successfully";


?>
