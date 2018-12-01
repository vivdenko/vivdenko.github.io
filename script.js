const Http = new XMLHttpRequest();
const url='http://nit.tron.net.ua/api/product/list';

window.onload=function(){
	Http.open("GET", url);
	Http.send();
	Http.onreadystatechange=(e)=>{
		if (Http.readyState != 4) return;
		var response = JSON.parse(Http.responseText);
		console.log(response)
		for (var i = 0; i < response.length; ++i) {
			var currentTovar = response[i];

			var nameDiv = document.createElement('div');
			nameDiv.innerText = currentTovar.name;
			
			var descriptionDiv = document.createElement('div');
			descriptionDiv.innerText = currentTovar.description;

			var img = document.createElement('img');
			img.setAttribute('src', currentTovar.image_url)

			var div = document.createElement('div');
			div.appendChild(nameDiv);
			div.appendChild(descriptionDiv);
			div.appendChild(img);

			document.body.appendChild(div);
		}
	}
}