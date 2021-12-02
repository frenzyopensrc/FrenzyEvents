function sendData(data, endpoint, apiKey) {
	var xhr = new XMLHttpRequest();
	var stringifiedData = JSON.stringify(data);

	xhr.open('POST', endpoint);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.setRequestHeader('x-frenzy-authorization', apiKey);
	
 	xhr.send(stringifiedData);

  	xhr.onload = function () {
    		if (xhr.status.toString()[0] !== '2') {
      			console.error(xhr.status + '> ' + xhr.statusText);
   		}
  	};
}