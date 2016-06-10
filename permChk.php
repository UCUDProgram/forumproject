<?php
function validaction ($auser, $anobject, $anoper){
     $dbacct = new PDO("sqlite:users.sqlite") or die("Failed to open DB");
        if (!$dbacct) die ($error);
        
    $query = "SELECT Perm_ID FROM User_Permission WHERE Users.UName='$auser' & User_Permission.User_Id = '$auser'";
    $pass_state = $dbhandle->prepare($query);
    $pass_state->execute();
    $pass_result = $pass_state->fetchAll(PDO::FETCH_ASSOC);
    
    foreach($pass_result as $areturn){

    $perm_query = "SELECT role_ID FROM Permissions WHERE perm_Id='$areturn'";
    $pass_state = $dbhandle->prepare($perm_query);
    $pass_state->execute();
    $pass_result = $pass_state->fetchAll(PDO::FETCH_ASSOC);
    
    }
    
    // $results = [];
    // $results.push();
};

$payload = json_decode(file_get_contents('php://input'));

if (isset($payload->username)){
$user = $payload->username;
}

if (isset($payload->operation)){
$oper = $payload->operation;
}

if (isset($payload->object)){
$obj = $payload->object;
}


$permCheck = validaction($user, $obj, $oper);
$result = $permCheck[0];
$message = $permCheck[1];



    $results = array("result" => $result, "message" => $message);
        
//this part is perhaps overkill but I wanted to set the HTTP headers and status code
    //making to this line means everything was great with this request
    header('HTTP/1.1 200 OK');
    //this lets the browser know to expect json
    header('Content-Type: application/json');
    //this creates json and gives it back to the browser
    echo json_encode($results);

?>