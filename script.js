const Http = new XMLHttpRequest();
const url='http://nit.tron.net.ua/api/category/list';

window.onload=function(){
	Http.open("GET", url);
	Http.send();
	Http.onreadystatechange=(e)=>{
		if (Http.readyState != 4) return;
		var response = JSON.parse(Http.responseText);
		
		for (var i = 0; i < response.length; ++i) {
			var div = document.createElement('div');

			var nameDiv = document.createElement('div');
			var descriptionDiv = document.createElement('div');

			var currentTovar = response[i];
			nameDiv.innerText = currentTovar.name;
			descriptionDiv.innerText = currentTovar.description;

			div.appendChild(nameDiv);
			div.appendChild(descriptionDiv);

			document.body.appendChild(div);
		}
	}
}