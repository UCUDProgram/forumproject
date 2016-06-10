<?php
$payload = json_decode(file_get_contents('php://input'));

if (isset($payload->post)){
$postName = $payload->post;
}

$dbacct = new PDO("sqlite:forumdb.sqlite") or die("Failed to open DB");
        if (!$dbacct) die ($error);
      
    $comment_query = "SELECT CommentAuthor, CommentText FROM Comment WHERE PostName = '$postName'";
    $comment_state = $dbacct->prepare($comment_query);
    $comment_state->execute();
    $result = $comment_state->fetchAll(PDO::FETCH_ASSOC);
    
    $comment_result=[];
    foreach($result as $aComment){
        $commAuth = $aComment[CommentAuthor];
        $commText = $aComment[CommentText];
        $indComment = [$commAuth,$commText];
        array_push($comment_result, $indComment);
    }
      
    $results = array("comments" => $comment_result);  

//this part is perhaps overkill but I wanted to set the HTTP headers and status code
    //making to this line means everything was great with this request
    header('HTTP/1.1 200 OK');
    //this lets the browser know to expect json
    header('Content-Type: application/json');
    //this creates json and gives it back to the browser
    echo json_encode($results);
?>