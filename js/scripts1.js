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
      //create html to be written with user's input
      var usernameValueText = document.innerHTML = ('<b>Username:</b> <br>' + usernameValue);
      var commentValueText = document.innerHTML = ('<b>Comment:</b> <br>' + commentValue);
      //check if html is written correctly
      console.log(usernameValueText);
      console.log(commentValueText);
      //create div to wrap each individual comment section
      var containerDiv = document.createElement = 'div';
      containerDiv.className = 'container m-5 border border-danger';
      document.body.appendChild(containerDiv);
      //create new element for user's name
      var printUsername = document.createElement('p');
      printUsername.innerHTML = usernameValueText;
      printUsername.className = 'm-4';
      // add new element to the Center of the page
      var getCommentSection = document.getElementById('comments');
      // getCommentSection.className = 'border border-dark border-rounded m-2 mb-5 mt-5';
      containerDiv.appendChild(printUsername);
      //create new element for user's comment
      var printComment = document.createElement('p');
      containerDiv.innerHTML = commentValueText;
      containerDiv.className = 'm-4';
      // add new element to the Center of the page
      containerDiv.appendChild(printComment);
      // var resetPlaceHolder = document.getElementById('username').placeholder = 'Username:';
      var getMyForm = document.getElementById('myForm');
      getMyForm.reset();
      //create the remove button
      var button = document.createElement('button');
      containerDiv.appendChild(button);
      button.className = 'btn btn-sm btn-dark border border-rounded text-light ml-5 mt-2 mb-4 text-center';
      button.textContent = 'Delete';
    //   button.addEventListener('click', function(event) {
    //
    //     if (event.target.className = 'button') {
    //       body.removeChild
    //     }
    //
    //
    // })

  validateForm();


}


//create a remove button when user submits comment
// create event listener that removes the comment & button on click





// THIS IS WORKING! KEEP IT! FOR REFERENCE
// var newHeader = document.createElement('h3');
// newHeader.className = 'container bg-danger';
// newHeader.style.minHeight = '500px';
// document.body.appendChild(newHeader);
