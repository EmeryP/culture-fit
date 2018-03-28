'use strict';

var formElement = document.getElementById('usernameForm');

function setupDataStorage(){
  var storedUsername = localStorage.getItem('newUsername');
  if (storedUsername && storedUsername.length) {
    alert('Welcome ' + storedUsername);
    console.log('Loaded from Local Storage');
    return;
  }
  //do not do this here
  // else{
  //   alert('Please enter your name!');
  // }
}
console.log('Doing it the hard way');

function getUserName(event){
  event.preventDefault();
  var newUsername = event.target.username.value;
  if(newUsername && newUsername.length){
    //if username has a length, say welcome back to user append an li to the ul with the content
    alert('welcome ' + newUsername);
  }

  storeData();
}

formElement.addEventListener('submit', getUserName);

function storeData(){
  localStorage.setItem('newUsername', event.target.username.value);
}

setupDataStorage();