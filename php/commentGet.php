<?php
$payload = json_decode(file_get_contents('php://input'));

if (isset($payload->post)){
$postName = $payload->post;
}

$dbacct = new PDO("sqlite:forumdb.sqlite") or die("Failed to open DB");
        if (!$dbacct) die ($error);
      
    $comment_query = "SELECT * FROM Comment WHERE PostName = '$postName'";
    $comment_state = $dbhandle->prepare($comment_query);
    $comment_state->execute();
    $comment_result = $comment_state->fetchAll(PDO::FETCH_ASSOC);
      
    $results = array("posts" => $comment_result);  

//this part is perhaps overkill but I wanted to set the HTTP headers and status code
    //making to this line means everything was great with this request
    header('HTTP/1.1 200 OK');
    //this lets the browser know to expect json
    header('Content-Type: application/json');
    //this creates json and gives it back to the browser
    echo json_encode($results);
?>