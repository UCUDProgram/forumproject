var profilePage =["pwdChg", "usrChg", "contactChg","statChg"];

var user="";
var password = "";
var firstName = "";
var lastName = "";
var contactInfo = "";
var status = "";


















var loadProfileInfo = function(){
    var URL = "https://forum-project-ucudprogram-1.c9users.io/php/login.php";
  var xhr = new XMLHttpRequest();
  
  xhr.onload = function(){
    if (this.status == 200){
      parseLoginData(this.response);
    }
  };
  xhr.open("GET", URL);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();
};

var parseLoginData = function (chuckJSON){
    var data = JSON.parse(chuckJSON);
    user = data.user;
    password = data.password;
    firstName = data.first;
    lastName = data.last;
    contactInfo = data.contact;
    status = data.status;
};





var profileViewed = function(){
    loadProfileInfo();    
};
document.addEventListener('DCOMContentLoaded', profileViewed);