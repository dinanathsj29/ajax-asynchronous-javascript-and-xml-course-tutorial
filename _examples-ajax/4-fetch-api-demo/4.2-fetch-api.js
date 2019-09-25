console.log('4.2-fetch-api.js loaded');

// get buttons from html/DOM
const getButton = document.getElementById('getButton');
const postButton = document.getElementById('postButton');

// define function to get data
const fn_getData = () => {
  console.log('getButton clicked - in fn_getData');

  fetch('https://reqres.in/api/users').then(respenseResult => {
    console.log('respenseResult:', respenseResult);
    // to convert response body: ReadableStream to json
    return respenseResult.json();
  })
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

  const options = {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: 'email=eve.holt@reqres.in&password=pistol'
  }
  
  fetch('https://reqres.in/api/register', options)
  .then(respenseResult => {
    console.log('respenseResult:', respenseResult);
    return respenseResult.json();
  })
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
