'use strict';

var output = document.getElementById('output');

var btn = document.getElementById('btn');

var temp;
var converted;

btn.addEventListener('click', function() {
  temp = parseInt(window.prompt('Enter the temperature in Celsius'));
  if (!isNaN(temp)) {
    converted = (temp * 1.8) + 32;
    console.log(converted);
    output.innerHTML = temp +"&#176C is equal " + 
    Math.floor(converted) + "&#176F Fahrenheit";
  } else {
    output.innerHTML = "Wrong value";
  }
})