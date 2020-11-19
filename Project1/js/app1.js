window.onload = function () {
	var number = 0;
  	var button = document.getElementById('counterButton');
	var appendNumber = document.getElementById('number');

	button.onclick = function() {
		console.log("worked");
		number++;
		appendNumber.innerHTML = number;
	}

  }
  

