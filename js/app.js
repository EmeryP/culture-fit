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
  storeData();
}

formElement.addEventListener('submit', getUserName);

function storeData(){
  localStorage.setItem('newUsername', event.target.username.value);
}

setupDataStorage();