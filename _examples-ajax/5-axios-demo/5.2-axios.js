console.log('5.2-axios.js loaded');

// get buttons from html/DOM
const getButton = document.getElementById('getButton');
const postButton = document.getElementById('postButton');

// define function to get data
const fn_getData = () => {
  console.log('getButton clicked - in fn_getData');

  axios.get('https://reqres.in/api/users').then(respenseResultData => {
    console.log('respenseResultData:', respenseResultData);

    document.getElementsByClassName('user-name')[0].innerHTML = respenseResultData.data.data[0].first_name + ' ' + respenseResultData.data.data[0].last_name;
    document.getElementsByClassName('user-email')[0].innerHTML = respenseResultData.data.data[0].email;
    document.getElementsByClassName('user-image')[0].src = respenseResultData.data.data[0].avatar;
  })

}

// define function to post/send data
const fn_postData = () => {
  console.log('postButton clicked - in fn_postData');

  const postLoginData = {
    email: "eve.holt@reqres.in",
    password: "pistol"
  };

  axios.post('https://reqres.in/api/register', postLoginData, {
    headers: {
      'Content-type': 'application/json'
    }
  }).then(respenseResultData => {
    console.log('respenseResultData:', respenseResultData);
    console.log('respenseResultData.data:', respenseResultData.data);
  }).catch(err => {
    console.error('Request failed...Something went wrong :', err);
    console.error(err, err.response.data);
  })

}

// add event listener to button
getButton.addEventListener('click', fn_getData);
postButton.addEventListener('click', fn_postData);
