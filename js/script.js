'use strict';

// define html elements
var output = document.getElementById('output');
var btn = document.getElementById('btn');

// variables
var celsius;
var fahrenheit;

// get celsius and return fahrenheit
var getFahrenheit = function(celsius) {
  fahrenheit = Math.floor((celsius * 1.8) + 32);
  return fahrenheit;
}

// get celsius and return message
var getMsg = function(celsius) {
  if (celsius <= -28) {
    return 'It\'s freezing. Stay at home!';
  } else if (celsius <= 12) {
    return 'It\'s cold. Take something with long sleeves.';
  } else if (celsius >= 28) {
    return 'Don\'t forget about something to drink.<br>'+
    ' It\'s hot outside.';
  } else {
    return 'The temperature is average.';
  }
}

// get fahrenheit and return celsius
var getCelsius = function(fahrenheit) {
  celsius = Math.floor((fahrenheit - 32) * (5/9));
  return celsius;
}

// display text on the page and add a new line
var printOnPage = function() {
  output.innerHTML = '<br>' + celsius + ' &#176C is equal '
  + fahrenheit + ' &#176F <br>' + getMsg(celsius)
  + '<br>';
}

// click buttons action
var convCelsius = function() {
  celsius = parseInt(window.prompt('Enter the temperature in Celsius'));
  if (!isNaN(celsius)) {
    getFahrenheit(celsius);
    printOnPage();
  } else {
    output.innerHTML = 'Wrong value';
  }
}

var convFahrenheit = function() {
  fahrenheit = parseInt(window.prompt('Enter the temperature in Fahrenheit'));
  if (!isNaN(fahrenheit)) {
    getCelsius(fahrenheit);
    printOnPage();
  } else {
    output.innerHTML = 'Wrong value';

  }
}

btnC.addEventListener('click', convCelsius);
btnF.addEventListener('click', convFahrenheit);