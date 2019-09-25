console.log('3.1-xhr-req-res-live.js loaded');

// get buttons from html/DOM
const getButton = document.getElementById('getButton');
const postButton = document.getElementById('postButton');

// define function to get data
fn_getData = () => {
  console.log('getButton clicked - in fn_getData');

  var xhr = new XMLHttpRequest();
  // use fake rest api `https://reqres.in/`, below url get list of users
  xhr.open('GET', 'https://reqres.in/api/users');

  // convert XMLHttpRequest results to 'json' bydefault
  xhr.responseType = 'json';

  xhr.onload = () => {
    let results = xhr.response;
    console.log('results:', results);

    //convert string data to json/javascript object - ommit by using xhe.responseType = 'json'
    // const jsonData = JSON.parse(results);
    // console.log('jsonData:', jsonData);
  }

  xhr.send();
}

// define function to post/send data
fn_postData = () => {
  console.log('postButton clicked - in fn_postData');

  const postData = {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
  };

  var xhr = new XMLHttpRequest();
  // use fake rest api `https://reqres.in/`, below url get list of users
  xhr.open('POST', 'https://reqres.in/api/register');

  // convert XMLHttpRequest results to 'json' bydefault
  // xhr.responseType = 'json';
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");

  xhr.onload = function () {
    var results = JSON.parse(xhr.responseText);
    console.log(results);

  };

  xhr.send((JSON.stringify(postData)));
}

// add event listener to button
getButton.addEventListener('click', fn_getData);
postButton.addEventListener('click', fn_postData);
