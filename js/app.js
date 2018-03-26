'use strict';

//get el by id
var formElement = document.getElementById('usernameForm');

//store form input in to local storage(create function to accomplish this)
// function storeData(){

//   var usersAsString = localStorage.getItem('usernameForm'); //assigning the value of local storages pictures
//   var useableUser = JSON.parse(picsAsString); //parsing pictures from JSON string
//   if (useableUser && useableUser.length) { //if useable and the length
//     Products.allProducts = useableUser; //
//     console.log('Loaded from Local Storage');
//     return; //quit the function
//   }
// }
//use form validation to confirm they enter some text

// function to handle click event
function getUserName(event){
  event.preventDefault();
  var newUsername = event.target.username.value;
  console.log(newUsername);
}

//TODO store the users name in a persons object(profile) so we can reference

//Add event listener
formElement.addEventListener('submit', getUserName);

// Save to local storage on submit
// function finish(){
//   // save to LS
//   var saveUser = JSON.stringify(Products.allProducts);
//   localStorage.setItem('username', saveUser);
// }