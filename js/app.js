'use strict';

var formElement = document.getElementById('usernameForm');
var userWelcome = document.getElementById('userwelcome');

function setupDataStorage(){
  var storedUsername = localStorage.getItem('newUsername');
  if (storedUsername && storedUsername.length) {
    var pElement = document.createElement('p');
    pElement.textContent = ('Welcome back, ' + storedUsername + '!');
    userWelcome.appendChild(pElement);
    return;
  }
}

function getUserName(event){
  event.preventDefault();
  var newUsername = event.target.username.value;
  localStorage.setItem('newUsername', newUsername);
}

formElement.addEventListener('submit', getUserName);


setupDataStorage();