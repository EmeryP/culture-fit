'use strict';

// global arrays with coded answers
var languageArray = ['java', 'javascript', 'asp', 'python', 'swift'];

var flexArray = ['flexTrue', 'flexFalse'];

var stressArray = ['pingPong', 'foosball', 'videoGames', 'gym', 'bowling', 'nothing'];

var pressureArray = ['pressureTrue', 'pressureFalse'];

var volunteerArray = ['volunteerTrue', 'volunteerFalse'];

var sizeArray = ['large', 'small'];


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

// grab each question and push into array

// increment into next one

// create event listeners

// create event handlers

// functions that interate over the array

// send each company instance and push into local storage (JSON)

// get elements from the DOM