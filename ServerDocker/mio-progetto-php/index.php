<?php 
header("Access-Control-Allow-Method: *");
header("Access-Control-Allow-Origin: *");
//echo $_GET["city"];
$response = get_web_page("https://api.api-ninjas.com/v1/city?name=".$_GET["city"],"fDscqmNVz0OUrAi5KGO86w==7Qeunr7zou1wrCFk");
//chiave = fDscqmNVz0OUrAi5KGO86w==7Qeunr7zou1wrCFk
//$response = get_web_page("https://api.api-ninjas.com/v1/city?name=naples","fDscqmNVz0OUrAi5KGO86w==7Qeunr7zou1wrCFk");
$resArr = array();
$resArr = json_decode($response,true);

/*foreach ($resArr as $data)
{
    print_r($data);
echo "latitude=".$data['latitude'].", longitude=".$data['longitude']."<br>";
}*/
//echo "latitude=".$resArr[0]['latitude'].", longitude=".$resArr[0]['longitude']."<br>";

$response = get_web_page("https://api.open-meteo.com/v1/forecast?latitude=".$resArr[0]['latitude']."&longitude=".$resArr[0]['longitude']."&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&forecast_days=1&timezone=Europe%2FLondon","null");
echo $response;
//$resArr = json_decode($response,true);


function get_web_page($url,$key) {
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
        CURLOPT_HTTPHEADER => ['X-Api-Key:'.$key]
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
