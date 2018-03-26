'use strict';

var languageArray = ['java', 'javascript', 'asp', 'python', 'swift'];

var flexArray = ['flexTrue', 'flexFalse'];

var stressArray = ['pingPong', 'foosball', 'videoGames', 'gym', 'bowling', 'nothing'];

var pressureArray = ['pressureTrue', 'pressureFalse'];

var volunteerArray = ['volunteerTrue', 'volunteerFalse'];

var sizeArray = ['sizeTrue', 'sizeFalse'];

function Company (language, flex, stress, pressure, volunteer, size) {
  this.language = language;
  this.flex = flex;
  this.stress = stress;
  this.pressure = pressure;
  this.volunteer = volunteer;
  this.size = size;
}
