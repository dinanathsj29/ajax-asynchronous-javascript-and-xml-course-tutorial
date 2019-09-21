console.log('2.4-loading-json-web-api-data.js loaded');

var xhr = new XMLHttpRequest();
xhr.open('GET','https://learnwebcode.github.io/json-example/animals-1.json');

xhr.onload = function() {
  let results = xhr.responseText;
  console.log('string type of json:',results);
  document.write('<h1>Load JSON data from .json file:</h1>');
  document.write(results);

  results = JSON.parse(xhr.responseText);
  console.log('json object after parsing:',results);
  
  document.write('<h2>Load 1 st animal details:</h2>');
  var animal1 = results[1].name;
  document.write('Name : ' + animal1);
}

xhr.send();