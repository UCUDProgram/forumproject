<?php
$payload = json_decode(file_get_contents('php://input'));

if (isset($payload->topic)){
$topic = $payload->topic;
}

if (isset($payload->post)){
$post = $payload->post;
}

$dbacct = new PDO("sqlite:forumdb.sqlite") or die("Failed to open DB");
        if (!$dbacct) die ($error);
      
    $ind_post_query = "SELECT PostAuthor, PostText FROM Post WHERE TopicName = '$topic' AND PostName = '$post'";
    $ind_post_state = $dbacct->prepare($ind_post_query);
    $ind_post_state->execute();
    $ind_post_result = $ind_post_state->fetchAll(PDO::FETCH_ASSOC);

$postAuthor = $ind_post_result[0][PostAuthor];
// echo $postAuthor;
$postText = $ind_post_result[0][PostText];

$results = array("author" => $postAuthor, "text" => $postText);  

//this part is perhaps overkill but I wanted to set the HTTP headers and status code
    //making to this line means everything was great with this request
    header('HTTP/1.1 200 OK');
    //this lets the browser know to expect json
    header('Content-Type: application/json');
    //this creates json and gives it back to the browser
    echo json_encode($results);
?>