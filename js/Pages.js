// Deals with the Forum Page views
var pages = ['home' , 'posts' , 'post' , 'user' , 'register' , 'newTopic' , 'newPost' , 'newComment'];
var currentPageIndex = 0;
var returnIndex = 0;

// Variable for displaying topic
var topicTitle ="";

// Variable for displaying post
var postTitle = "";

// Variable for displaying comment
// var PostName = "";

// Utility Tools Variables
var operation = "";
var object = "";

// User Registration Variables 
var firstName = "";
var lastName = "";
var contact = "";
var username = "";
var password = "";
var passVerify = "";
var authorRole = "";

// Account Login Variables
var user = "";
var pass = "";

// New Topic Variables
var newTopic = "";

// New Post Variables
var postName = "";
var postText = "";

// New Comment Variables
var comment = "";

// Variables for List of Topics or posts
var topicList = [];
var postList = [];
var commentList = [];

// Logged in variables
var initUser = "Guest";
var acctName = initUser;
var loggedIn = false;

var valid = false;
var mess = "";

// Variables for and individual post
var indPostName = "";
var indPostAuthor = "";
var indPostText = "";

var showHomeScreen = function(){
    var oldIndex = currentPageIndex;
    currentPageIndex = 0;
    document.getElementById(pages[oldIndex]).classList.add('hidden');
    document.getElementById(pages[currentPageIndex]).classList.remove('hidden');
    document.getElementById("user_account").classList.remove('hidden');
    showTopics();
    // console.log(topicList);
};

var showPostsScreen = function(){
  var oldIndex = currentPageIndex;
  returnIndex = currentPageIndex;
  currentPageIndex = 1;
  document.getElementById(pages[oldIndex]).classList.add('hidden');
  document.getElementById(pages[currentPageIndex]).classList.remove('hidden');
  showPosts();
  // renderPostEditButtons();
};

var showPostScreen = function(){
  var oldIndex = currentPageIndex;
  returnIndex = currentPageIndex;
    currentPageIndex = 2;
    document.getElementById(pages[oldIndex]).classList.add('hidden');
    document.getElementById(pages[currentPageIndex]).classList.remove('hidden');
    showPost();
    // displayIndPost();
    // showComments();
    // renderPostEditButtons();
    // renderCommentEditButtons();
};

var showAccountScreen = function(){
  var oldIndex = currentPageIndex;
  returnIndex = currentPageIndex;
  currentPageIndex = 3;
  document.getElementById(pages[oldIndex]).classList.add('hidden');
  document.getElementById(pages[currentPageIndex]).classList.remove('hidden');
  document.getElementById("user_account").classList.add('hidden');
  
};

var showRegistration = function(){
    var oldIndex = currentPageIndex;
    returnIndex = currentPageIndex;
    currentPageIndex = 4;
    document.getElementById(pages[oldIndex]).classList.add('hidden');
    document.getElementById(pages[currentPageIndex]).classList.remove('hidden');
};

var showNewTopicScreen = function(){
  var oldIndex = currentPageIndex;
  returnIndex = currentPageIndex;
    currentPageIndex = 5;
    document.getElementById(pages[oldIndex]).classList.add('hidden');
    document.getElementById(pages[currentPageIndex]).classList.remove('hidden');
    renderTopicAuthor();
};

var showNewPostScreen = function(){
  var oldIndex = currentPageIndex;
  returnIndex = currentPageIndex;
    currentPageIndex = 6;
    document.getElementById(pages[oldIndex]).classList.add('hidden');
    document.getElementById(pages[currentPageIndex]).classList.remove('hidden');
    renderPostAuthor();
};

var showNewCommentScreen = function(){
  var oldIndex = currentPageIndex;
  returnIndex = currentPageIndex;
    currentPageIndex = 7;
    document.getElementById(pages[oldIndex]).classList.add('hidden');
    document.getElementById(pages[currentPageIndex]).classList.remove('hidden');
    renderCommentAuthor();
};

var returnScreen = function(){
    document.getElementById(pages[returnIndex]).classList.remove('hidden');
    document.getElementById(pages[currentPageIndex]).classList.add('hidden');
    document.getElementById("user_account").classList.remove('hidden');
    currentPageIndex = returnIndex;
};


// Logging In variables
var setUserName = function(userLog){
  acctName = userLog;
};

var clearUserName = function(){
  acctName = initUser;
};

var setLoginStatus = function(){
  if(acctName == initUser)
    loggedIn = false;
  else
    loggedIn = true;
};

var userLogin = function(){
  userLoginAttempt();
  setLoginStatus();
};

var userLogout = function(){
  acctName = initUser;
  setLoginStatus();
};

var packageLogin = function(){
  JSON.stringify({user:username, pass:password});
};

var userLoginAttempt = function(){
  var URL = "https://forum_project-ucudprogram.c9users.io/login.php";
  var xhr = new XMLHttpRequest();
  
  xhr.onload = function(){
    if (this.status == 200){
      login(this.response);
    }
  };
  
  var data = packageLogin();
  xhr.open("POST", URL);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
};

var login = function(chuckJSON){
  var data = JSON.parse(chuckJSON);
  var loginResult = data.status;
  var loginMessage = data.message;
  
  if (loginResult){
    userLogin();
  } else {
    alert(loginMessage);
  }
};


// Permissions Check
var setOperation = function(oper){
  operation = oper;
};

var setObject = function(obj){
  object = obj;
};

var setPermissionChkParam = function(){
  JSON.stringify({username:acctName,operation:operation, object:object});
};

var permissionCheck = function(){
  var URL = "https://forum_project-ucudprogram.c9users.io/permChk.php";
  var xhr = new XMLHttpRequest();
  
  xhr.onload = function(){
    if (this.status == 200){
      validActivity(this.response);
    }
  };
  var data = setPermissionChkParam();
  xhr.open("POST", URL);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
};

var validActivity = function(chuckJSON){
  var data = JSON.parse(chuckJSON);
  valid = data.result;
  mess = data.message;
};

var validAction = function(){
  permissionCheck();
  if (valid){
    if (object == "Topic"){
      showNewTopicScreen();
    } else if (object == "Post"){
      showNewPostScreen();
    } else{
      showNewCommentScreen();
    } 
  } else
    alert(mess);
};



// Topic Submission Section
var packageTopic = function(){
  JSON.stringify({author:acctName ,topic:postTitle});
};

var topicSubmission = function(){
  var URL = "https://forum-project-ucudprogram-1.c9users.io/newTopic.php";
  var xhr = new XMLHttpRequest();
  var data = packageTopic();
  xhr.open("POST", URL);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
};

// Post Submission Section
var packagePost = function(){
  JSON.stringify({author:acctName ,postTitle:postTitle, postText:postText});
};

var postSubmission = function(){
  var URL = "https://forum-project-ucudprogram-1.c9users.io/newPost.php";
  var xhr = new XMLHttpRequest();
  var data = packagePost();
  xhr.open("POST", URL);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
};

// Comment Submission Segment
var packageComment = function(){
  JSON.stringify({author:acctName, post:postTitle, comment:comment});
};

var commentSubmission = function(){
  var URL = "https://forum-project-ucudprogram-1.c9users.io/newComment.php";
  var xhr = new XMLHttpRequest();
  var data = packageComment();
  xhr.open("POST", URL);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
};

var registerSubmission = function(){
  regData();
};

// Registration Submission Segment
var packageRegistration = function(){
  JSON.stringify({Fname:firstName, Lname:lastName,contact:contact, username:username, password:password, userStat:authorRole});
};

var regData = function(){
  var URL = "https://forum-project-ucudprogram-1.c9users.io/register.php";
  var xhr = new XMLHttpRequest();
  
  xhr.onload = function(){
    if (this.status == 200){
      registered(this.response);
    }
  };
  
  var data = packageRegistration();
  xhr.open("POST", URL);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
};

var registered = function(chuckJSON){
  var reg = JSON.parse(chuckJSON);
  var message = reg.message;
  alert(message);
};

// Displaying topics
var showTopics = function(){
  updateTopics();
  displayTopics();
};

var updateTopics = function(){
var URL = "https://forum-project-ucudprogram-1.c9users.io/topicGet.php";
  var xhr = new XMLHttpRequest();
  
  xhr.onload = function(){
    if (this.status == 200){
      topicParsing((this.response));
    }
  };
  
  xhr.open("POST", URL);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();
};

var topicParsing = function(chuckJSON){
  var data = JSON.parse(chuckJSON);
  topicList = data.topics;
  displayTopics();
  // console.log(topicList);
};

var displayTopics = function(){
  var $div = document.getElementById("topList");
 $div.innerHTML = "";
  topicList.forEach(function (atopic){
    var $atopic = document.createElement("div");
    $atopic.innerHTML = atopic;
    $atopic.addEventListener("click", function (ev){
      topicTitle = atopic;
      showPostsScreen();
  });
  $div.appendChild($atopic);
  });
};

// Displaying Posts
var showPosts = function(){
  getPosts();
  // displayPosts();
};

var getPosts = function(){
var URL = "https://forum-project-ucudprogram-1.c9users.io/postGet.php";
  var xhr = new XMLHttpRequest();
  
  xhr.onload = function(){
    if (this.status == 200){
      postsParsing((this.response));
      // displayPosts();
    }
  };
  
  var data = JSON.stringify({topic:topicTitle});
  xhr.open("POST", URL);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
};

var postsParsing = function(chuckJSON){
  var pData = JSON.parse(chuckJSON);
  postList = pData.posts;
  displayPosts();
};

var displayPosts = function(){
  var $div = document.getElementById("postList");
      $div.innerHTML = "";
  postList.forEach(function (post){
    var $apost = document.createElement("div");
    $apost.innerHTML = post;
    $apost.addEventListener("click", function (ev){
      postTitle = post;
      showPostScreen();
    });
   $div.appendChild($apost); 
  });
};

// Displaying Comments
var showComments = function(){
  getComments();
  // displayComments();
};

var getComments = function(){
  var URL = "https://forum-project-ucudprogram-1.c9users.io/commentGet.php";
  var xhr = new XMLHttpRequest();
  
  xhr.onload = function(){
    if (this.status == 200){
      parseComments((this.response));
    }
  };
  var data = JSON.stringify({post:postTitle});
  xhr.open("POST", URL);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
};

var parseComments = function(chuckJSON){
  var data = JSON.parse(chuckJSON);
  commentList = data.comments;
  displayComments();
};

var displayComments = function(){
  var $div = document.getElementById("commentList");
  commentList.forEach(function (acomment){
    var $acom = document.createElement("div");
    $acom.innerHTML = "";
    var $acomTitle = document.createElement("div");
    $acomTitle.innerHTML = acomment[0];
    $acom.appendChild($acomTitle);
    var $acomText = document.createElement("div");
    $acomText.innerHTML = acomment[1];
    $acom.appendChild($acomText); 
   $div.appendChild($acom);
  });
};

var showPost = function(){
  // console.log(topicTitle);
  // console.log(postTitle);
  getPost();
  
  // displayPost();
  // showComments();
};

var getPost = function(){
  var URL = "https://forum-project-ucudprogram-1.c9users.io/indPostGet.php";
  var xhr = new XMLHttpRequest();
  
  xhr.onload = function(){
    if (this.status == 200){
      parsePost((this.response));
      // displayIndPost();
    }
  };
  var data = JSON.stringify({topic:topicTitle, post:postTitle});
  // console.log(data);
  xhr.open("POST", URL);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(data);
};

var parsePost = function(chuckJSON){
  var postdata = JSON.parse(chuckJSON);
  // console.log(postdata);
  indPostName = postTitle;
  indPostAuthor = postdata.author;
  indPostText = postdata.text;
  // console.log(indPostAuthor);
  // console.log(indPostText);
  
  displayPostTitle();
      displayPostAuthor();
      displayPostContents();
  
};

// var displayIndPost = function(){
var displayPostTitle = function(){  
  // console.log(indPostName);
  var $div = document.getElementById("indPostTitle");
  $div.innerHTML = "";
  var $postTitle = document.createElement("p");
  $postTitle.innerHTML = indPostName;
  $div.appendChild($postTitle);
  

};

var displayPostAuthor = function(){
  // console.log(indPostAuthor);
  var $div = document.getElementById("indPostAuthor");
  $div.innerHTML = "";
  var $postAuthor = document.createElement("p");
  $postAuthor.innerHTML = indPostAuthor;
  $div.appendChild($postAuthor);
};

var displayPostContents = function(){
  // console.log(indPostText);
  var $div = document.getElementById("indPostText");
  $div.innerHTML = "";
  var $postText = document.createElement("p");
  $postText.innerHTML =  indPostText;
  $div.appendChild($postText);

};

var renderCommentAuthor = function(){
  var $div = document.getElementById("commentAuthor");
  $div.innerHTML = "";
  var $auth = document.createElement("p");
  var authText = "Author: " + "\t" + acctName;
  $auth.innerHTML =  authText;
  $div.appendChild($auth);
};

var renderPostAuthor = function(){
  var $div = document.getElementById("postAuthor");
  $div.innerHTML = "";
  var $auth = document.createElement("p");
  var authText = "Author: " + "\t" + acctName;
  $auth.innerHTML =  authText;
  $div.appendChild($auth);
};


var renderTopicAuthor = function(){
  var $div = document.getElementById("topicAuthor");
  $div.innerHTML = "";
  var $auth = document.createElement("p");
  var authText = "Author: " + "\t" + acctName;
  $auth.innerHTML =  authText;
  $div.appendChild($auth);
};

// Functions to handle the input boxes
var updateFirstName = function(){
  firstName = document.getElementById("first").value;
};

var updateLastName = function(){
  lastName = document.getElementById("last").value;
};

var updateContact = function(){
  contact = document.getElementById("contact").value;
};

var updateUserName = function(){
  username = document.getElementById("new_user").value;
};

var updatePassword = function(){
  password = document.getElementById("new_pwd").value;
};

var updatePassVerify = function(){
  passVerify = document.getElementById("new_pwd_verify").value;
};

var updateAuthor = function(){
  authorRole = document.getElementById("authorStat").value;
};

var updateUser = function(){
  user = document.getElementById("uname").value;
};

var updatePass = function(){
  pass = document.getElementById("pword").value;
};

var newTopicName = function(){
  newTopic = document.getElementById("topicName").value;
};

var newPostTitle = function(){
  postName = document.getElementById("postName").value;
};

var newPostText = function(){
  postText = document.getElementById("postText").value;
};

var newCommentText = function(){
  comment = document.getElementById("commentText").value;
};




var appStart = function(){
  currentPageIndex = 0;
  showHomeScreen();
 
    // Event Listeners for Registering a new User
    document.getElementById("register_Acct").addEventListener("click",showRegistration);
    document.getElementById("first").addEventListener("blur",updateFirstName);
    document.getElementById("last").addEventListener("blur",updateLastName);
    document.getElementById("contact").addEventListener("blur",updateContact);
    document.getElementById("new_user").addEventListener("blur",updateUserName);
    document.getElementById("new_pwd").addEventListener("blur",updatePassword);
    document.getElementById("new_pwd_verify").addEventListener("blur",updatePassVerify);
    document.getElementById("registerSubmit").addEventListener("click",registerSubmission);
    document.getElementById("registerBack").addEventListener("click",returnScreen);
    
    // Event Listeners for Logging In
    document.getElementById("logIn").addEventListener("click",showAccountScreen);
    document.getElementById("uname").addEventListener("blur",updateUser);
    document.getElementById("pword").addEventListener("blur",updatePass);
    document.getElementById("loginSubmit").addEventListener("click",showAccountScreen);
    document.getElementById("registration").addEventListener("click",showRegistration);
    document.getElementById("forumBack").addEventListener("click", returnScreen);
    
    // Event Listeners for Creating a topic
    document.getElementById('topicName').addEventListener("blur", newTopicName);
    document.getElementById("submitTopic").addEventListener("click",topicSubmission);
    document.getElementById("topicBack").addEventListener("click",returnScreen);
    
    // Event Listeners for Creating a post
    document.getElementById('postName').addEventListener("blur", newPostTitle);
    document.getElementById('postText').addEventListener("blur", newPostText);
    document.getElementById("submitPost").addEventListener("click",postSubmission);
    document.getElementById("postBack").addEventListener("click",returnScreen);
    
    // Event Listeners for Creating a comment
    document.getElementById('commentText').addEventListener("blur", newCommentText);
    document.getElementById("submitComment").addEventListener("click",commentSubmission);
    document.getElementById("commentBack").addEventListener("click",returnScreen);
    
    
    document.getElementById('new_Topic').addEventListener("click", showNewTopicScreen);
    document.getElementById('new_Post').addEventListener("click", showNewPostScreen);
    document.getElementById('new_Comment').addEventListener("click", showNewCommentScreen);

    document.getElementById('indPostBack').addEventListener("click",showPostsScreen);
    document.getElementById('topicReturn').addEventListener("click",showHomeScreen);
    
    
    // document.getElementById('submitTopic').addEventListener("click",createTopic);
};

document.addEventListener('DOMContentLoaded',appStart);