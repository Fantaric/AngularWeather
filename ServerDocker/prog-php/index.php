<?php 

$ch = curl_init();

$url = "apiUrl/".$_GET["city"];

curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);

$resp = curl_exec($ch);
if($e = curl_error($ch)){
    echo $e;
}
else{
    
    echo($resp);
}

?>
