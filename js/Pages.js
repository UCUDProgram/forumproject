var pages = ["home","posts", "post", "indPost", "indComment"];
var loggedIn = false;
var acctName = "";

// Related to the user_account container
// Display login or signup button
var showUserInfo = function(){
  document.getElementById("user_account").classList.remove('hidden');
  if (loggedIn){
      displayUser();
  }  else {
      addAcctButtons();
  }
};

var addAcctButtons = function(){
  $div = document.getElementById("user_account");
  
  
  
  
};

var displayUser = function(){
    
};


var appStart = function(){
    
};

document.addEventListener('DOMContentLoaded',appStart);