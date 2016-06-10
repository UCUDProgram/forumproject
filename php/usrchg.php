<?php

$payload = json_decode(file_get_contents('php://input'));
if (isset($payload->username)){
$user = $payload->username;
}

if (isset($payload->new_username)){
$new_user = $payload->new_username;
}

$dbhandle = new PDO("sqlite:accounts.sqlite") or die("Failed to open DB");
     if (!$dbhandle) die ($error);
   
    $query = "UPDATE Users SET username = '$new_user' WHERE Username='$user'";
    $statement = $dbhandle->prepare($query);
    $statement->execute();
    $message = "Your username has successfully been changed.";









//this part is perhaps overkill but I wanted to set the HTTP headers and status code
    //making to this line means everything was great with this request
    header('HTTP/1.1 200 OK');
    //this lets the browser know to expect json
    header('Content-Type: application/json');
    //this creates json and gives it back to the browser
    echo json_encode($results);
?>