function printComment() {
  var usernameValue = document.getElementById('username').value;
  var commentValue = document.getElementById('comment').value;
  console.log(usernameValue);
  console.log(commentValue);
  var usernameValueText = document.innerHTML = ('User: <br>' + usernameValue);
  var commentValueText = document.innerHTML = ('Comment: <br>' + commentValue);
  console.log(usernameValueText);
  console.log(commentValueText);
  var printUsername = document.createElement('p');
  printUsername.innerHTML = usernameValueText;
  // printUsername.newClass = 'container-fluid col-md-12 bg-danger w-50 mx-auto';
  document.body.appendChild(printUsername);
  var printComment = document.createElement('p');
  printComment.innerHTML = commentValueText;
  // printComment.newClass = 'container-fluid col-md-12 bg-danger w-50 mx-auto';
  document.body.appendChild(printComment);
}

// THIS IS WORKING! KEEP IT! FOR REFERENCE
// var newHeader = document.createElement('h3');
// newHeader.className = 'container bg-danger';
// newHeader.style.minHeight = '500px';
// document.body.appendChild(newHeader);
