<?php
$payload = json_decode(file_get_contents('php://input'));

if (isset($payload->topic)){
$Topic = $payload->topic;
}

if (isset($payload->author)){
$Author = $payload->author;
}

$dbacct = new PDO("sqlite:forumdb.sqlite") or die("Failed to open DB");
        if (!$dbacct) die ($error);

    $topicQuery = "INSERT INTO Topic(TopicName, TopicAuthor) VALUES ('$Topic','$Author')";
    $dbacct->exec($topicQuery);
?>