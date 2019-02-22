'use strict';


$( ".enterButton" ).submit(function( event ) {
  validation();
  event.preventDefault();
});



function validation() {
  let firstName = document.getElementById('firstNameInput').value;
  let lastName = document.getElementById('lastNameInput').value;
  let email = document.getElementById('emailInput').value;
  let text = document.getElementById('textInput').value;
  let form = document.getElementById('form');

  if (firstName == null || lastName == null || email == null || text == null) {
    alert("Please enter correct information for all fields null");
  }
  else {
    firstName = "";
    lastName = "";
    email = "";
    text = "";
  }
}
