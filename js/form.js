'use strict';

var languageArray = ['java', 'javascript', 'asp', 'python', 'swift'];

var flexArray = ['flexTrue', 'flexFalse'];

var stressArray = ['pingPong', 'foosball', 'videoGames', 'gym', 'bowling', 'nothing'];

var pressureArray = ['pressureTrue', 'pressureFalse'];

var volunteerArray = ['volunteerTrue', 'volunteerFalse'];

var sizeArray = ['large', 'small'];

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

new Company('Starbucks', 'Java', false, false, true, true, 'Large', '../img/starbucks.jpg');
new Company('Zillow', 'Java', true, ['Ping Pong', 'Foosball'], false, true, 'Large', '../img/zillow.png');
new Company('Nordstrom', ['Java', 'Python'], false, false, false, true, 'Large', '../img/nordstrom.png');
new Company('Filmic', 'Swift', true, false, false, false, 'small', '../img/filmic.png');
new Company('Microsoft', ['Javascript', 'asp.net', 'Python'], true, ['Gym', 'Foosball'], false, true, 'Large', '../img/microsoft.jpg');


// console.log(Company.filepath);

