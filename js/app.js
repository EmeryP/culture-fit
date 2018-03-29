'use strict';

var formElement = document.getElementById('usernameForm');
var userWelcome = document.getElementById('userwelcome');
var headerList = document.getElementById('header-list');
var formDiv = document.getElementById('form');

function setupDataStorage(){
  var storedUsername = localStorage.getItem('newUsername');
  if (storedUsername && storedUsername.length) {
    var pElement = document.createElement('p');
    pElement.textContent = ('Welcome back, ' + storedUsername + '!');
    userWelcome.appendChild(pElement);
    formDiv.remove();
    return;
  }else{
    headerList.remove();
  }
}
function getUserName(event){
  event.preventDefault();
  var newUsername = event.target.username.value;
  localStorage.setItem('newUsername', newUsername);
  window.location.href='html/form.html';
}

formElement.addEventListener('submit', getUserName);

setupDataStorage();
