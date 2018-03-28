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
  new Company('Starbucks', 'java', 'false', 'false', 'true', 'true', 'large', '../img/starbucks.jpg');
  new Company('Zillow', 'java', 'true', 'foosball', 'false', 'true', 'large', '../img/zillow.png');
  new Company('Nordstrom', 'python', 'false', 'false', 'false', 'true', 'large', '../img/nordstrom.png');
  new Company('Filmic', 'swift', 'true', 'false', 'false', 'false', 'small', '../img/filmic.png');
  new Company('Microsoft', 'asp.net', 'true', 'gym', 'false', 'true', 'large', '../img/microsoft.jpg');
  new Company('Amazon', 'java', 'true', 'pingPong', 'true', 'true', 'large', '../img/amazon.png');
  new Company('CDK Global', 'javascript', 'true', 'pingPong', 'true', 'true', 'large', '../img/CDK.jpg');
  new Company('Valve', 'python', 'true', 'pingPong', 'true', 'false', 'small', '../img/valve.png');
  new Company('Projekt202', 'javascript', 'true', 'bowling', 'false', 'false', 'small', '../img/projekt202.png');
  new Company('Expedia', 'java', 'true', 'gym', 'false', 'true', 'large', '../img/expedia.svg');
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

  userAnswers = [];
  userAnswers.push(userNameInput, languageInput, flexScheduleInput, stressRelieverInput, pressureInput, volunteerInput, sizeInput);

  compareAnswers();
  sort();
  storingUserAnswers();
  displayResults(Company.allCompanies);
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

function fromLocalStorage() {
  var userResults = localStorage.getItem('userListResults');
  var useableResults = JSON.parse(userResults);
  displayResults(useableResults);
}

//display results
function displayResults (listOfResults) {
  if (!listOfResults) {
    return;
  }
  // remove event listener
  formElement.removeEventListener('submit', eventHandler);
  h2Element.textContent = 'Here are your personalized results, ' + localStorage.newUsername + '!';
  for (var i = 0; i < listOfResults.length; i++) {
    var listElement = document.createElement('li');
    listElement.textContent = (listOfResults[i].name + ' matched ' + listOfResults[i].counter + ' of your preferences.');
    ulElement.appendChild(listElement);
  }
  var storedString = JSON.stringify(listOfResults);
  localStorage.setItem('userListResults', storedString);

  document.getElementById('button').disabled = true;
}

// send user's results into local storage (JSON)
function storingUserAnswers (){
  var userAnswerStrings = JSON.stringify(userAnswers);
  localStorage.setItem('userAnswers', userAnswerStrings);
}

fromLocalStorage();
companyList();
stringifyCompany();
// refreshEventHandler();


//add a new event listener to a fresh button
var refreshFormElement = document.getElementById('refreshForm');
refreshFormElement.addEventListener('submit', refreshEventHandler);


// add a function to refresh form and turn the other event listener back on
function refreshEventHandler(event) {
  formElement.addEventListener('submit', eventHandler);

  var removeUL = document.querySelector('#topresult');
  removeUL.parentNode.removeChild(removeUL);
  localStorage.removeItem('userListResults');
}

