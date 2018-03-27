'use strict';

//get el by id
var formElement = document.getElementById('usernameForm');

//store form input in to local storage(create function to accomplish this)
function setupDataStorage(){

  var storedUsername = localStorage.getItem('newUsername'); //assigning the value of storedUsername the value of our key
  if (storedUsername && storedUsername.length) { //there is a username
    alert('Hello ' + storedUsername); //alert helllo ____________
    // Products.allProducts = storedUsername;
    console.log('Loaded from Local Storage');
    return; //quit the function
  }
}
console.log('doing it the hard way');

// TODO: use form validation to confirm they enter some text

// function to handle click event
function getUserName(event){
  event.preventDefault();
  var newUsername = event.target.username.value;
  console.log(newUsername);

  storeData();
}

//TODO store the users name in a persons object(profile) so we can reference

//Add event listener
formElement.addEventListener('submit', getUserName);

// Save to local storage on submit
function storeData(){
  localStorage.setItem('newUsername', event.target.username.value); //setting local storage to drill into event to set value
}

setupDataStorage();