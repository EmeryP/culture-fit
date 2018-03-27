'use strict';

Company.allCompanies = [];

// user array
User.userAnswers = [];

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
function User(username){
  // this.username = localStorage.newUsername; //gets username from local storage
  User.userAnswers.push(this); //push all users anwers to userAnswer array
  console.log(User.username);
}
User();

function companyList () {
  var pullCompany = localStorage.getItem('listOfCompanies');
  var readableCompany = JSON.parse(pullCompany);

  if (readableCompany && readableCompany.length) {
    Company.allCompanies = readableCompany;
    return;
  }

  //company instances
  new Company('Starbucks', 'Java', false, false, true, true, 'Large', '../img/starbucks.jpg');
  new Company('Zillow', 'Java', true, ['Ping Pong', 'Foosball'], false, true, 'Large', '../img/zillow.png');
  new Company('Nordstrom', ['Java', 'Python'], false, false, false, true, 'Large', '../img/nordstrom.png');
  new Company('Filmic', 'Swift', true, false, false, false, 'small', '../img/filmic.png');
  new Company('Microsoft', ['Javascript', 'asp.net', 'Python'], true, ['Gym', 'Foosball'], false, true, 'Large', '../img/microsoft.jpg');
  new Company('Amazon', 'Java', true, 'Ping Pong', true, true, 'Large', '../img/amazon.png');
  new Company('CDK Global', ['Java', 'Javascript', 'asp.net'], true, 'Ping Pong', true, true, 'Large', '../img/CDK.jpg');
  new Company('Valve', ['asp.net', 'Java', 'Python', 'Javascript'], true, 'Ping Pong', true, false, 'Small', '../img/valve.png');
  new Company('Projekt202', 'Javascript', true, ['Bowling League', 'Ping Pong', 'Foosball'], false, false, 'Small', '../img/projekt202.png');
  new Company('Expedia', ['Javascript', 'Java', 'Python'], true, 'Gym', false, true, 'Large', '../img/expedia.svg');
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
  console.log(languageInput);
  console.log(flexScheduleInput);

  console.log(stressRelieverInput);
  console.log(pressureInput);
  console.log(volunteerInput);
  console.log(sizeInput);
  
  
}

// functions that interate over the array

// send each company instance and push into local storage (JSON)

// get elements from the DOM

companyList();
stringifyCompany();