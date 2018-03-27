'use strict';

Company.allCompanies = [];

// user array
var userAnswers = [];

// access el from DOM
// var languageOne = document.getElementById('language1');

var formElement = document.getElementById('formSubmit');

// arrays with coded answers
var languageArray = ['java', 'javascript', 'asp', 'python', 'swift'];
var flexArray = ['flexTrue', 'flexFalse'];
var stressArray = ['pingPong', 'foosball', 'videoGames', 'gym', 'bowling', 'nothing'];
var pressureArray = ['pressureTrue', 'pressureFalse'];
var volunteerArray = ['volunteerTrue', 'volunteerFalse'];
var sizeArray = ['large', 'small'];

function stringifyCompany() {
  var saveCompany = JSON.stringify(Company.allCompanies);
  localStorage.setItem('listOfCompanies', saveCompany);
}

//constructor function
function Company (name, language, flex, stress, pressure, volunteer, size, filepath) {
  this.name = name;
  this.language = language;
  this.flex = flex;
  this.stress = stress;
  this.pressure = pressure;
  this.volunteer = volunteer;
  this.size = size;
  this.filepath = filepath;
  Company.allCompanies.push(this);
}

// Constructor function for user
// function User(username){
//   // this.username = localStorage.newUsername; //gets username from local storage
//   User.userAnswers.push(this); //push all users anwers to userAnswer array
//   console.log(User.username);
// }
// User();

function companyList () {
  var pullCompany = localStorage.getItem('listOfCompanies');
  var readableCompany = JSON.parse(pullCompany);

  if (readableCompany && readableCompany.length) {
    Company.allCompanies = readableCompany;
    return;
  }

  //company instances
  new Company('starbucks', 'java', 'false', 'false', 'true', 'true', 'large', '../img/starbucks.jpg');
  new Company('zillow', 'java', 'true', ['pingPong', 'foosball'], 'false', 'true', 'large', '../img/zillow.png');
  new Company('nordstrom', ['java', 'python'], 'false', 'false', 'false', 'true', 'large', '../img/nordstrom.png');
  new Company('filmic', 'swift', 'true', 'false', 'false', 'false', 'small', '../img/filmic.png');
  new Company('microsoft', ['javascript', 'asp.net', 'python'], 'true', ['gym', 'foosball'], 'false', 'true', 'large', '../img/microsoft.jpg');
  new Company('amazon', 'java', 'true', 'pingPong', 'true', 'true', 'large', '../img/amazon.png');
  new Company('cdk global', ['java', 'javascript', 'asp.net'], 'true', 'pingPong', 'true', 'true', 'large', '../img/CDK.jpg');
  new Company('valve', ['asp.net', 'java', 'python', 'javascript'], 'true', 'pingPong', 'true', 'false', 'small', '../img/valve.png');
  new Company('projekt202', 'javascript', 'true', ['bowling', 'pingPong', 'foosball'], 'false', 'false', 'small', '../img/projekt202.png');
  new Company('expedia', ['javascript', 'java', 'python'], 'true', 'gym', 'false', 'true', 'large', '../img/expedia.svg');
}

console.log(Company.allCompanies);

// grab each question and push into array

// increment into next one

// create event listeners
formElement.addEventListener('submit', eventHandler);

// create event handlers
function eventHandler(event){
  event.preventDefault();

  var languageInput = event.target.language.value;
  var flexScheduleInput = event.target.flex.value;
  var stressRelieverInput = event.target.stress.value;
  var pressureInput = event.target.pressure.value;
  var volunteerInput = event.target.volunteer.value;
  var sizeInput = event.target.size.value;
  userAnswers.push(languageInput, flexScheduleInput, stressRelieverInput, pressureInput, volunteerInput, sizeInput);
  // console.log(languageInput);
  // console.log(flexScheduleInput);
  // console.log(stressRelieverInput);
  // console.log(pressureInput);
  // console.log(volunteerInput);
  // console.log(sizeInput);
}

//create function to compare userAnswers array to each company object
function compareAnswers(){

}

// remove event listener

// functions that interate over the array

// send each company instance and push into local storage (JSON)

// get elements from the DOM

companyList();
stringifyCompany();