require('./css/main.css');
var structureTmpl = require('./templates/structure.html');

// var Test = require('./js/test.js');

// var test = new Test();
// test.logger();

var mainStructure = document.getElementsByName('body');

console.log(mainStructure);
console.log(structureTmpl);

// if (mainStructure) {
mainStructure.innerHTML = structureTmpl;
// }


// var hello = document.getElementById('main');
// hello.innerHTML = 'Hello World!';

