function printComment() {
  //Get value from user's input
  var usernameValue = document.getElementById('username').value;
  var commentValue = document.getElementById('comment').value;
  //Check to see if value was stored in variable
  console.log(usernameValue);
  console.log(commentValue);
  //create html to be written with user's input
  var usernameValueText = document.innerHTML = ('Username: <br>' + usernameValue);
  var commentValueText = document.innerHTML = ('Comment: <br>' + commentValue);
  //check if html is written correctly
  console.log(usernameValueText);
  console.log(commentValueText);
  //create new element for user's name
  var printUsername = document.createElement('p');
  printUsername.innerHTML = usernameValueText;
  // add new element to the Center of the page
  document.getElementById('comments').appendChild(printUsername);
  //create new element for user's comment
  var printComment = document.createElement('p');
  printComment.innerHTML = commentValueText;
  // add new element to the Center of the page
  document.getElementById('comments').appendChild(printComment);
}



// THIS IS WORKING! KEEP IT! FOR REFERENCE
// var newHeader = document.createElement('h3');
// newHeader.className = 'container bg-danger';
// newHeader.style.minHeight = '500px';
// document.body.appendChild(newHeader);
