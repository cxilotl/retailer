
require('./css/main.css');

var Test = require('./js/test.js');

var test = new Test();

var hello = document.getElementById('main');
hello.innerHTML = 'Hello World!';