'use strict';

var output = document.getElementById('output');

var btn = document.getElementById('btn');

var temp;
var celsius
var fahrenheit;

btnC.addEventListener('click', function() {
  celsius = parseInt(window.prompt('Enter the temperature in Celsius'));
  if (!isNaN(celsius)) {
    fahrenheit = (celsius * 1.8) + 32;
    output.innerHTML = celsius +'&#176C is equal ' + 
    Math.floor(fahrenheit) + '&#176F <br><br>';
    
    if (celsius <= -28) {
      output.innerHTML += 'It\'s freezing. Stay at home!';
    } else  if (celsius <= 12) {
      output.innerHTML += 'It\'s cold. Take something with long sleeves.';
    } else if (celsius >= 28) {
      output.innerHTML += 'Don\'t forget about something to drink.<br>'+
      ' It\'s hot outside.';
    } else {
      output.innerHTML += 'The temperature is average.';
    }

  } else {
    output.innerHTML = 'Wrong value';
  }
})

btnF.addEventListener('click', function() {
  fahrenheit = parseInt(window.prompt('Enter the temperature in Fahrenheit'));
  if (!isNaN(fahrenheit)) {
    celsius = (fahrenheit - 32) * (5/9);
    console.log(celsius);
    output.innerHTML = fahrenheit +'&#176F is equal ' + 
    Math.floor(celsius) + '&#176C <br><br>';
    
    if (celsius <= -28) {
      output.innerHTML += 'It\'s freezing. Stay at home!';
    } else  if (celsius <= 12) {
      output.innerHTML += 'It\'s cold. Take something with long sleeves.';
    } else if (celsius >= 28) {
      output.innerHTML += 'Don\'t forget about something to drink.<br>'+
      ' It\'s hot outside.';
    } else {
      output.innerHTML += 'The temperature is average.';
    }

  } else {
    output.innerHTML = 'Wrong value';
  }
})