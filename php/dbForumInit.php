<?php
$dbhandle = new PDO("sqlite:users.sqlite") or die("Failed to open DB");
     if (!$dbhandle) die ($error);

"CREATE TABLE Topic(TapicName TEXT, TopicAuthor TEXT)";

"CREATE TABLE Post(TopicName TEXT, PostName TEXT, PostText TEXT, PostAuthor TEXT)";

"CREATE TABLE Comment(PostName TEXT, CommentAuthor TEXT, CommentText TEXT)";


?>