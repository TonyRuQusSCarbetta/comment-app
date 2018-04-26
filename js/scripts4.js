function printComment() {
  //Get value from user's input
  var usernameValue = document.getElementById('username').value;
  var commentValue = document.getElementById('comment').value;
  //Check to see if value was stored in variable
  console.log(usernameValue);
  console.log(commentValue);
  //Check if user left input blank
  function validateForm() {
    if (usernameValue==null || usernameValue=="", commentValue==null || usernameValue=="")
        {
            alert("Please Fill In All Required Fields");
            return false;
        }
  // If user did not leave a field blank run this code
    else {
      //create new div to wrap each individual user/comment
      var newDiv = document.createElement('div');
      document.body.appendChild(newDiv);
      newDiv.className = "col-md-offest-6 mx-auto max-height min-height max-width bg-light m-5 pl-4 pr-4 pt-4 border border-dark rounded";
      //create html to be written with user's input
      var usernameValueText = document.innerHTML = ('<b>Username:</b> <br>' + usernameValue);
      usernameValueText.className = 'border-bottom';
      var commentValueText = document.innerHTML = (commentValue);
      commentValueText.className = 'border-bottom';
      //check if html is written correctly
      console.log(usernameValueText);
      console.log(commentValueText);
      //create new element for user's name
      var printUsername = document.createElement('h6');
      printUsername.innerHTML = usernameValueText;
      printUsername.className = 'm-4 border border-bottom text-center border-rounded';
      // add new element to the Center of the page
      newDiv.appendChild(printUsername);
      //create new element for user's comment
      var printComment = document.createElement('h6');
      printComment.innerHTML = commentValueText;
      printComment.className = 'mt-2 border-dark comment-max-height overflow';
      // add new element to the Center of the page
      newDiv.appendChild(printComment);
      // var resetPlaceHolder = document.getElementById('username').placeholder = 'Username:';
      var getMyForm = document.getElementById('myForm');
      getMyForm.reset();
      //create the remove button
      var newDiv1 = document.createElement('div');
      newDiv.appendChild(newDiv1);
      // var button = document.createElement('button');
      // newDiv1.appendChild(button);
      // button.className = 'btn btn-lg active btn-dark border border-rounded text-light ml-5 mt-1 mb-2 text-center remove';
      // button.textContent = 'Delete';




    }
  }
validateForm();
}

// THIS IS WORKING! KEEP IT! FOR REFERENCE
// var newHeader = document.createElement('h3');
// newHeader.className = 'container bg-danger';
// newHeader.style.minHeight = '500px';
// document.body.appendChild(newHeader);
