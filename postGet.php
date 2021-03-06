<?php
$payload = json_decode(file_get_contents('php://input'));

if (isset($payload->topic)){
$topic = $payload->topic;
}
// echo $topic;

$dbacct = new PDO("sqlite:forumdb.sqlite") or die("Failed to open DB");
        if (!$dbacct) die ($error);
      
    $post_query = "SELECT PostName FROM Post WHERE TopicName = '$topic'";
    $post_state = $dbacct->prepare($post_query);
    $post_state->execute();
    $post_result = $post_state->fetchAll(PDO::FETCH_ASSOC);
    $post_results = [];
    foreach($post_result as $aPost){
        array_push($post_results, $aPost[PostName]);
    }
      
    $results = array("posts" => $post_results);  

//this part is perhaps overkill but I wanted to set the HTTP headers and status code
    //making to this line means everything was great with this request
    header('HTTP/1.1 200 OK');
    //this lets the browser know to expect json
    header('Content-Type: application/json');
    //this creates json and gives it back to the browser
    echo json_encode($results);
?>