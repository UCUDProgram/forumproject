<?php
$payload = json_decode(file_get_contents('php://input'));

if (isset($payload->Fname)){
$first = $payload->Fname;
// echo $user;
}

if (isset($payload->Lname)){
$last = $payload->Lname;
// echo $user;
}

if (isset($payload->contact)){
$contact = $payload->contact;
// echo $user;
}

if (isset($payload->username)){
$user = $payload->username;
// echo $user;
}

if (isset($payload->password)){
$pass = $payload->password;
// echo $pass;
}

if (isset($payload->userStat)){
$status = $payload->userStat;
// echo $user;
}

$message = "";


// Check the database for the potential Password
$dbhandle = new PDO("sqlite:passwords.sqlite") or die("Failed to open DB");
     if (!$dbhandle) die ($error);
$query = "SELECT word FROM Passwords WHERE word='$pass'";
$statement = $dbhandle->prepare($query);
$statement->execute();
$pass_result = $statement->fetchAll(PDO::FETCH_ASSOC);

// If user_result size ==1 (>0) the suggested password is in the illegal passwords database
if (sizeof($pass_result) > 0){
    $result = false;
    $message = "Your password is invalid";
} else {
    $result = true;
}

if($result){
// Check the database for the potential Password
$dbuser = new PDO("sqlite:accounts.sqlite") or die("Failed to open DB");
     if (!$dbuser) die ($error);
$userQuery = "SELECT Username FROM Users WHERE Username='$user'";
$statement = $dbuser->prepare($userQuery);
$statement->execute();
$user_result = $statement->fetchAll(PDO::FETCH_ASSOC);

// echo $user_result;

// If user_result size ==1 (>0) the suggested password is in the illegal passwords database
if (sizeof($user_result) > 0){
    $result = false;
    $message = "The username is already taken";
} else {
    $result = true;
}

}

if ($result){
    // Check the database for the potential Password
    $dbacct = new PDO("sqlite:users.sqlite") or die("Failed to open DB");
        if (!$dbacct) die ($error);

    $regQuery = "INSERT INTO Users(FName, LName, UName, PWord, Contact, Status) VALUES ('$first','$last','$user', '$pass','$contact', '$status')";
    $dbacct->exec($regQuery);    
    
    if ($status == "Author"){
        $Auth_Insert = "INSERT INTO User_Permission(User_Id, Perm_Id) VALUES ('$user','2')";
        $dbacct->exec($Auth_Insert);
        $user_Insert = "INSERT INTO User_Permission(User_Id, Perm_Id) VALUES ('$user','3')";
        $dbacct->exec($user_Insert);
    } else {
        $use_Insert = "INSERT INTO User_Permission(User_Id, Perm_Id) VALUES ('$user','3')";
        $dbacct->exec($use_Insert);
    }
    
    $message = "Registration Complete, You can now login.";
    } 
     
    $results = array("result" => $result, "message" => $message);
        
//this part is perhaps overkill but I wanted to set the HTTP headers and status code
    //making to this line means everything was great with this request
    header('HTTP/1.1 200 OK');
    //this lets the browser know to expect json
    header('Content-Type: application/json');
    //this creates json and gives it back to the browser
    echo json_encode($results);
?>