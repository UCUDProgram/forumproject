<?php
$payload = json_decode(file_get_contents('php://input'));

if (isset($payload->topic)){
$topic = $payload->topic;
}
// $topic = "test";
// echo $topic;
    $dbacct = new PDO("sqlite:forumdb.sqlite") or die("Failed to open DB");
        if (!$dbacct) die ($error);
      
    $topic_query = "SELECT TopicName FROM Topic";
    $topic_state = $dbacct->prepare($topic_query);
    // $topic_state->execute();
    
    
    $topic_state->execute();
    $topic_result = $topic_state->fetchAll(PDO::FETCH_ASSOC);
      
    echo $topic_result;  
      
    $results = array("topics" => $topic_result);  
      
//this part is perhaps overkill but I wanted to set the HTTP headers and status code
    //making to this line means everything was great with this request
    header('HTTP/1.1 200 OK');
    //this lets the browser know to expect json
    header('Content-Type: application/json');
    //this creates json and gives it back to the browser
    echo json_encode($results);
?>