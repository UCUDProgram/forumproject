<?php
$payload = json_decode(file_get_contents('php://input'));

if (isset($payload->postTitle)){
$pTitle = $payload->postTitle;;
}

if (isset($payload->author)){
$pAuthor = $payload->author;
}

if (isset($payload->postText)){
$pText = $payload->postText;
}

$dbacct = new PDO("sqlite:forumdb.sqlite") or die("Failed to open DB");
        if (!$dbacct) die ($error);

$postQuery = "INSERT INTO Post(PostName, PostAuthor, PostText) VALUES ('$pTitle','$pAuthor','$pText')";
    $dbacct->exec($postQuery);
?>