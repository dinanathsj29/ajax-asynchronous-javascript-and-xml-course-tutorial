console.log('2.3-loading-json-data.js loaded');

var xhr = new XMLHttpRequest();
xhr.open('GET','animals1.json');

xhr.onload = function() {
  let results = xhr.responseText;
  console.log('string type of json:',results);
  document.write('<h1>Load JSON data from .json file:</h1>');
  document.write(results);

  results = JSON.parse(xhr.responseText);
  console.log('json object after parsing:',results);
  
  document.write('<h2>Load 0 th animal details:</h2>');
  var animal0 = results[0].name;
  document.write('Name : ' + animal0);
}

xhr.send();