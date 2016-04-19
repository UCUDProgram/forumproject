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
  var $div = document.getElementById('user_account');
  var $log = document.createElement('p');
  $log.innerHTML = 'Login';
  $log.addEventListener('click',function(ev){
      
  });
  
  var $sign = document.createElement('p');
  $sign.innerHTML = 'Sign Up';
  $sign.addEventListener('click',function(ev){
      
  });
  
};




var displayLoginInfo = function(){
    
};

var displayUser = function(){
    
};














// var displaySearchBar = function(){
    
// };

var appStart = function(){
    
};

document.addEventListener('DOMContentLoaded',appStart);