console.log('3.2-xhr-req-res-live-advanced.js loaded');

// get buttons from html/DOM
const getButton = document.getElementById('getButton');
const postButton = document.getElementById('postButton');

// common function to send receive http call
const fn_sendhttpRequest = (httpMethod, httpUrl, data) => {
  // promise
  const httpPromise = new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();

    // use fake rest api `https://reqres.in/`, below url get list of users
    xhr.open(httpMethod, httpUrl);

    // convert XMLHttpRequest results to 'json' bydefault
    xhr.responseType = 'json';

    if (data) {
      xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
    }

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    }

    xhr.onerror = () => {
      reject('Please verify...something went wrong!');
    }

    xhr.send(JSON.stringify(data));

  });

  return httpPromise;

}

// define function to get data
const fn_getData = () => {
  console.log('getButton clicked - in fn_getData');

  fn_sendhttpRequest('GET', 'https://reqres.in/api/users').then(respenseResultData => {
    console.log('respenseResultData:', respenseResultData);
    document.getElementsByClassName('user-name')[0].innerHTML = respenseResultData.data[0].first_name + ' ' + respenseResultData.data[0].last_name;
    document.getElementsByClassName('user-email')[0].innerHTML = respenseResultData.data[0].email;
    document.getElementsByClassName('user-image')[0].src = respenseResultData.data[0].avatar;
  });

}

// define function to post/send data
const fn_postData = () => {
  console.log('postButton clicked - in fn_postData');

  const postLoginData = {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
  };

  fn_sendhttpRequest('POST', 'https://reqres.in/api/register', postLoginData).then(respenseResultData => {
    console.log('respenseResultData:', respenseResultData);
  }).catch(err => {
    console.log('errors: ', err);
  });

}

// add event listener to button
getButton.addEventListener('click', fn_getData);
postButton.addEventListener('click', fn_postData);
