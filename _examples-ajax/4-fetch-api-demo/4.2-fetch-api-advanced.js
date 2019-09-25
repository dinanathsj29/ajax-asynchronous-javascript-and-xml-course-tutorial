console.log('4.2-fetch-api-advanced.js loaded');

// get buttons from html/DOM
const getButton = document.getElementById('getButton');
const postButton = document.getElementById('postButton');

// common function to send receive http call
const fn_sendhttpRequest = (httpMethod, httpUrl, data) => {

  return fetch(httpUrl, {
    method: httpMethod,
    body: JSON.stringify(data),
    headers: data ? {'Content-type': 'application/json'} : {}
  }).then(respenseResult => { 
    console.log('respenseResult:', respenseResult);
    if (respenseResult.status >= 400) {
      return respenseResult.json().then(errResponseData => {
        const error = new Error('Please verify...something went wrong!');
        error.data = errResponseData;
        throw error;
      })
    }
    // to convert response body: ReadableStream to json
    return respenseResult.json();
  })

}

// define function to get data
const fn_getData = () => {
  console.log('getButton clicked - in fn_getData');

  fn_sendhttpRequest('GET', 'https://reqres.in/api/users')
  .then(respenseResultData => {
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
    email: "eve.holt@reqres.in",
    password: "pistol"
  };

  fn_sendhttpRequest('POST', 'https://reqres.in/api/register', postLoginData)
  .then(respenseResultData => {
    console.log('respenseResultData:', respenseResultData);
  })
  .catch(err => {
    console.error('Request failed', err)
  })

}

// add event listener to button
getButton.addEventListener('click', fn_getData);
postButton.addEventListener('click', fn_postData);
