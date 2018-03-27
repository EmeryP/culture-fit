'use strict';

Company.allCompanies = [];

var counterArray = [];

// user array
var userAnswers = [];

// access el from DOM
// var languageOne = document.getElementById('language1');

var formElement = document.getElementById('formSubmit');

// arrays with coded answers
// var languageArray = ['java', 'javascript', 'asp', 'python', 'swift'];
// var flexArray = ['flexTrue', 'flexFalse'];
// var stressArray = ['pingPong', 'foosball', 'videoGames', 'gym', 'bowling', 'nothing'];
// var pressureArray = ['pressureTrue', 'pressureFalse'];
// var volunteerArray = ['volunteerTrue', 'volunteerFalse'];
// var sizeArray = ['large', 'small'];

function stringifyCompany() {
  var saveCompany = JSON.stringify(Company.allCompanies);
  localStorage.setItem('listOfCompanies', saveCompany);
}

//constructor function
function Company (name, language, flex, stress, pressure, volunteer, size) {
  this.name = name;
  this.language = language;
  this.flex = flex;
  this.stress = stress;
  this.pressure = pressure;
  this.volunteer = volunteer;
  this.size = size;
  this.counter = 0;
  Company.allCompanies.push(this);
  // counterArray.push(this.counter);
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

  var userNameInput = localStorage.newUsername;
  var languageInput = event.target.language.value;
  var flexScheduleInput = event.target.flex.value;
  var stressRelieverInput = event.target.stress.value;
  var pressureInput = event.target.pressure.value;
  var volunteerInput = event.target.volunteer.value;
  var sizeInput = event.target.size.value;
  userAnswers.push(userNameInput, languageInput, flexScheduleInput, stressRelieverInput, pressureInput, volunteerInput, sizeInput);
  console.log(userNameInput);
  // console.log(languageInput);
  // console.log(flexScheduleInput);
  // console.log(stressRelieverInput);
  // console.log(pressureInput);
  // console.log(volunteerInput);
  // console.log(sizeInput);
  compareAnswers();
  sort();
}

// create function to compare userAnswers array to each company object
function compareAnswers(){
  for (var i in Company.allCompanies) {
    // if (userAnswers.includes(Company.allCompanies[i].language[i])){
    //   console.log('Lang');
    // }
    if(userAnswers.includes(Company.allCompanies[i].flex)){
      Company.allCompanies[i].counter++;
      console.log(Company.allCompanies[i].counter);
    } if(userAnswers.includes(Company.allCompanies[i].volunteer)){
      Company.allCompanies[i].counter++;
      console.log(Company.allCompanies[i].counter);
    } if(userAnswers.includes(Company.allCompanies[i].pressure)){
      Company.allCompanies[i].counter++;
      console.log(Company.allCompanies[i].counter);
    }
  }
}

function sort(){
  // var max = 0;
  // var sorted = [];
  // for (var i = 0; i < Company.allCompanies.length; i++) {
  //   if(typeof max === undefined){
  //     // console.log(max);
  //     // console.log(Company.allCompanies[i].counter);
  //     Company.allCompanies[i].counter = max;
  //   }
  //   console.log(Company.allCompanies[i].counter, max, 'hellocountermax');
  //   if (Company.allCompanies[i].counter >= max) {
      
  //     max = Company.allCompanies[i].counter;
  //     sorted.unshift(Company.allCompanies[i]);
      
  //   }
  // }
  var sorted = Company.allCompanies.sort(function(a,b){
    return b.counter - a.counter;
  });
  console.log(sorted);

}



// remove event listener

// functions that interate over the array

// send each company instance and push into local storage (JSON)

// get elements from the DOM

//return company name that is associated with the object that has the highest counter value

companyList();
stringifyCompany();

