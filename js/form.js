'use strict';

Company.allCompanies = [];


// user array
var userAnswers = [];

// access el from DOM
var formElement = document.getElementById('formSubmit');
var ulElement = document.getElementById('results');
var h2Element = document.getElementById('topresult');

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
}

function companyList () {
  var pullCompany = localStorage.getItem('listOfCompanies');
  var readableCompany = JSON.parse(pullCompany);

  if (readableCompany && readableCompany.length) {
    Company.allCompanies = readableCompany;
    return;
  }

  //company instances
  new Company('starbucks', 'java', 'false', 'false', 'true', 'true', 'large', '../img/starbucks.jpg');
  new Company('zillow', 'java', 'true', 'foosball', 'false', 'true', 'large', '../img/zillow.png');
  new Company('nordstrom', 'python', 'false', 'false', 'false', 'true', 'large', '../img/nordstrom.png');
  new Company('filmic', 'swift', 'true', 'false', 'false', 'false', 'small', '../img/filmic.png');
  new Company('microsoft', 'asp.net', 'true', 'gym', 'false', 'true', 'large', '../img/microsoft.jpg');
  new Company('amazon', 'java', 'true', 'pingPong', 'true', 'true', 'large', '../img/amazon.png');
  new Company('cdk global', 'javascript', 'true', 'pingPong', 'true', 'true', 'large', '../img/CDK.jpg');
  new Company('valve', 'python', 'true', 'pingPong', 'true', 'false', 'small', '../img/valve.png');
  new Company('projekt202', 'javascript', 'true', 'bowling', 'false', 'false', 'small', '../img/projekt202.png');
  new Company('expedia', 'java', 'true', 'gym', 'false', 'true', 'large', '../img/expedia.svg');
}

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
  compareAnswers();
  sort();
  displayResults();
}

// create function to compare userAnswers array to each company object
function compareAnswers(){
  for (var i in Company.allCompanies) {
    if(userAnswers.includes(Company.allCompanies[i].language)){
      Company.allCompanies[i].counter++;
    }
    if(userAnswers.includes(Company.allCompanies[i].flex)){
      Company.allCompanies[i].counter++;
    }
    if(userAnswers.includes(Company.allCompanies[i].stress)){
      Company.allCompanies[i].counter++;
    }
    if(userAnswers.includes(Company.allCompanies[i].pressure)){
      Company.allCompanies[i].counter++;
    }
    if(userAnswers.includes(Company.allCompanies[i].volunteer)){
      Company.allCompanies[i].counter++;
    }
    if(userAnswers.includes(Company.allCompanies[i].size)){
      Company.allCompanies[i].counter++;
    }
  }
}

// return company name that is associated with the object that has the highest counter value
function sort(){
  var sorted = Company.allCompanies.sort(function(a,b){
    return b.counter - a.counter;
  });
}

//display results
function displayResults () {
  // remove event listener
  h2Element.textContent = 'Here are your personalized results, ' + localStorage.newUsername + '!';
  formElement.removeEventListener('submit', eventHandler);
  for (var i = 0; i < Company.allCompanies.length; i++) {
    var listElement = document.createElement('li');
    listElement.textContent = (Company.allCompanies[i].name + ' matched ' + Company.allCompanies[i].counter + ' of your preferences.');
    ulElement.appendChild(listElement);
  }
}

// send user's results into local storage (JSON)


companyList();
stringifyCompany();