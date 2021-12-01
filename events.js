function sendData(data, endpoint, headers) {
	var xhr = new XMLHttpRequest();
	var stringifiedData = JSON.stringify(data);

	xhr.open('POST', endpoint);
	xhr.setRequestHeader('Content-type', 'application/json');
	
	for (h in headers){
       		header = headers[h];
       		xhr.setRequestHeader(header.key, header.value);
	}
 	xhr.send(stringifiedData);

  	xhr.onload = function () {
    		if (xhr.status.toString()[0] !== '2') {
      			console.error(xhr.status + '> ' + xhr.statusText);
   		}
  	};
}