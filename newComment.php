<?php
$payload = json_decode(file_get_contents('php://input'));

if (isset($payload->post)){
$cPost = $payload->post;
}

if (isset($payload->author)){
$cAuthor = $payload->author;
}

if (isset($payload->comment)){
$cText = $payload->comment;
}

$dbacct = new PDO("sqlite:forumdb.sqlite") or die("Failed to open DB");
    if (!$dbacct) die ($error);

$commQuery = "INSERT INTO Comment(PostName, CommentAuthor, CommentText) VALUES ('$cPost','$cAuthor','$cText')";
    $dbacct->exec($commQuery);
?>