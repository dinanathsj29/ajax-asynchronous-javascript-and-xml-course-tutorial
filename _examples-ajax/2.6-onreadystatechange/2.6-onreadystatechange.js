console.log('2.6-onreadystatechange.js loaded');

function loadData() {

  var xhr = new XMLHttpRequest();
  xhr.open('GET','data.txt',true);

  xhr.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      // responseText and response both are same/similar
      let responseText = xhr.responseText;
      let response = xhr.response;
      console.log('responseText',responseText);
      console.log('response',response);

      // document.getElementById("textContainer").innerHTML = this.responseText;
      document.getElementById("textContainer").innerText = this.responseText;

    }
  }

  xhr.send();

}
