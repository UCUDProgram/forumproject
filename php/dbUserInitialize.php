<?php

$dbhandle = new PDO("sqlite:users.sqlite") or die("Failed to open DB");
     if (!$dbhandle) die ($error);

// "INSERT INTO Permissions  "

//  $query = "INSERT Password FROM Users WHERE Username='$user'";
//     $pass_state = $dbhandle->prepare($query);
//     $pass_state->execute();

// FOLLOWING COMMANDS ARE FOR THE TABLE THAT DEALS WITH OBJECT OPERATION & PERMISSION ID 

"CREATE TABLE Permissions(Perm_Id TEXT, Operation TEXT, Object TEXT)";
"INSERT INTO Permissions(Perm_Id, Operation, Object) VALUES("1","CREATE","Users")";
"INSERT INTO Permissions(Perm_Id, Operation, Object) VALUES("2","READ","Users")";
"INSERT INTO Permissions(Perm_Id, Operation, Object) VALUES("3","UPDATE","Users")";
"INSERT INTO Permissions(Perm_Id, Operation, Object) VALUES("4","DESTROY","Users")";
"INSERT INTO Permissions(Perm_Id, Operation, Object) VALUES("5","CREATE","Topic")";
"INSERT INTO Permissions(Perm_Id, Operation, Object) VALUES("6","READ","Topic")";
"INSERT INTO Permissions(Perm_Id, Operation, Object) VALUES("7","UPDATE","Topic")";
"INSERT INTO Permissions(Perm_Id, Operation, Object) VALUES("8","DESTROY","Topic")";
"INSERT INTO Permissions(Perm_Id, Operation, Object) VALUES("9","CREATE","Post")";
"INSERT INTO Permissions(Perm_Id, Operation, Object) VALUES("10","READ","Post")";
"INSERT INTO Permissions(Perm_Id, Operation, Object) VALUES("11","UPDATE","Post")";
"INSERT INTO Permissions(Perm_Id, Operation, Object) VALUES("12","DESTROY","Post")";
"INSERT INTO Permissions(Perm_Id, Operation, Object) VALUES("13","CREATE","Comment")";
"INSERT INTO Permissions(Perm_Id, Operation, Object) VALUES("14","READ","Comment")";                          
"INSERT INTO Permissions(Perm_Id, Operation, Object) VALUES("15","UPDATE","Comment")";
"INSERT INTO Permissions(Perm_Id, Operation, Object) VALUES("16","DESTROY","Comment")";

// FOLLOWING COMMANDS ARE FOR THE TABLE THAT DEALS WITH ROLES AND THE PERMISSIONS
"CREATE TABLE Role_Permission(role_Id TEXT, perm_Id TEXT)";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("1","1")";                             
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("1","2")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("1","3")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("1","4")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("1","5")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("1","6")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("1","7")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("1","8")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("1","9")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("1","10")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("1","11")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("1","12")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("1","13")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("1","14")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("1","15")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("1","16")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("2","9")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("2","10")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("2","11")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("2","12")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("3","6")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("3","10")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("3","13")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("3","14")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("4","5")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("4","6")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("4","7")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("4","8")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("99","6")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("99","10")";
"INSERT INTO Role_Permission(role_Id, perm_Id) VALUES("99","13")";


// FOLLOWING COMMANDS ARE COMMAND-LINE ARGUMENTS TO ADD NON-TRADITIONAL FORUM USERS (ADMINISTRATORS & MODERATORS)
"INSERT INTO User_Permission("User_Id,Perm_Id) VALUES("Admin", "1");

"INSERT INTO User_Permission("User_Id,Perm_Id) VALUES("Moderator", "4");

"CREATE TABLE Passwords(word TEXT)";


?>